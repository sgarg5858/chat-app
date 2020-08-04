const users=[];

//Join User to Chat

function userJoin(id,name,room)
{
const user={id,name,room};
users.push(user);
return user;
}
//Get Currenr User
function getCurrentUser(id)
{
return users.find(user=>user.id==id);
}

function userLeavesChat(id)
{
    const index =users.findIndex(user => user.id ==id);
    if(index!=-1)
    {
        return users.splice(index,1)[0];
    }
}
function getRoomUsers(room)
{
return users.filter(user=>user.room == room);
}
module.exports={userJoin,getCurrentUser,userLeavesChat,getRoomUsers}