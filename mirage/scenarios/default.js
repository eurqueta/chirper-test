export default function( server ) {

  let user = server.create('user')
  server.createList('chirp',10,{user : user.id});

}