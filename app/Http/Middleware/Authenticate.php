<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

use App\Models\TeamInvitation;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        if ($request->hasValidSignature() && $request->routeIs('team-invitations.accept')) {
            $invitationId = $request->route('invitation');
            /** @var TeamInvitation $teamInvitation */
            $teamInvitation = TeamInvitation::query()->find($invitationId);
            $teamName = $teamInvitation->team->name ?? null;
            
            // We should store session value as well, so we can prevent email confirmation
            // since they already responded to an TeamInvitation.
            if ($teamName) {
                $request->session()->put('teamInvitation', $teamName);
            } else {
                /**
                 * If the invitation is deleted (already fulfilled), remove the
                 * intended URL to team invitation route so the User does not get
                 * a 403 after login or register. We can't do this here since
                 * the intended URL is not yet set, but place a marker to do so in.
                 * @see RedirectIfAuthenticated::handle()
                 */
                $request->session()->put('removeUrlIntended', true);
                $request->session()->flash('error', "This invitation has expired.");
            }
        }
        return $request->expectsJson() ? null : route('login');
    }
}
