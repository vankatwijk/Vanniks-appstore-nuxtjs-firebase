export default function(context){
  console.log('[Middleware] Check Auth');

  //check if the middle ware is running on the browser,
  //localstoreage is only available on the browser not on node
  //if(process.client){
    context.store.dispatch("initAuth",context.req);
  //}


}
