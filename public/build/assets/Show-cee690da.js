import{_ as c}from"./AppLayout-0c7431b8.js";import p from"./DeleteUserForm-7b0586e2.js";import l from"./LogoutOtherBrowserSessionsForm-4184cb15.js";import{S as s}from"./SectionBorder-8a059ae8.js";import f from"./TwoFactorAuthenticationForm-e6113502.js";import u from"./UpdatePasswordForm-e2b3cdfc.js";import d from"./UpdateProfileInformationForm-0630ebde.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app-b8123aae.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-75836639.js";import"./SectionTitle-de36d289.js";import"./DangerButton-e372a838.js";import"./DialogModal-3ea27eba.js";import"./TextInput-8b8955d9.js";import"./SecondaryButton-6f4c0d80.js";import"./ActionMessage-6a7e6c34.js";import"./PrimaryButton-19c8073b.js";import"./InputLabel-e726d9bc.js";import"./FormSection-2168f51a.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};