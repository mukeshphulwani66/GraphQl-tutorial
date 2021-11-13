import {quotes,users} from './fakedb.js'
import {randomBytes} from 'crypto'
const resolvers = {
    Query:{
       users:()=>users,
       user:(_,{id})=>users.find(user=>user.id == id),
       quotes:()=>quotes,
       iquote:(_,{by})=>quotes.filter(quote=>quote.by == by)
    },
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by == ur.id)
    },
    Mutation:{
        signupUserDummy:(_,{userNew})=>{
             const id = randomBytes(5).toString("hex")
             users.push({
                 id,
                 ...userNew
             })
            return users.find(user=>user.id == id)
        }
    }
}

export default resolvers