
import { SHOW_DATA ,SET_DATA ,ADMIN_LOGIN} from "../actionType"


const initialstate ={
    data:[
        {Emp_name:"Rakesh" , Emp_age:26 , Emp_sallary:10000 ,Emp_city:"indore"},
        {Emp_name:"mohit" , Emp_age:28 , Emp_sallary:15000 ,Emp_city:"ujjain"},
        {Emp_name:"sumit" , Emp_age:21 , Emp_sallary:8000 ,Emp_city:"Dewas"},
        {Emp_name:"amit" , Emp_age:23 , Emp_sallary:12000 ,Emp_city:"Bhopal"},
        {Emp_name:"purvi" , Emp_age:32 , Emp_sallary:45000 ,Emp_city:"khargown"}
    ]
}


const userReaducer = (state=initialstate,action) =>{
    switch(action.type){
        case SHOW_DATA :
            return{
                ...state,
                data:state.data
            }
            break;
            case SET_DATA :
            const addList = state.data;
            addList.push(action.payload)
            return{
                ...state,
                data:[...addList]
            }
            break;
            case ADMIN_LOGIN :
                var Current_User = action.payload.AdminUsername;
                var Current_Password = action.payload.AdminPassword;
                if(Current_User === "admin" && Current_Password === '123456'){
                    var token = "A1asd546541&%4edfsdfs";
                    localStorage.setItem("token",JSON.stringify(token))
                }
            return{
                ...state,
                token:token
            }
            break;
            default:
                return state
    }
}

export default userReaducer;