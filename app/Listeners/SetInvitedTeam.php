<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Session;

class SetInvitedTeam
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        if ($event instanceof Login || $event instanceof Registered) {
            if (Session::has('teamInvitationId')) {
                $user = $event->user;
                
                // Set the invited team for the user
                $user->current_team_id = Session::get('teamInvitationId');
                $user->save();
                
                // Remove the session variable to prevent setting it again
                Session::forget('teamInvitationId');
            }
        }
    }
}
