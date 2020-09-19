export default function(context){

  console.log('[Middleware] Auth');
  if(!context.store.getters.isAuthenticated){
    context.redirect('/admin/auth')
  }

}
