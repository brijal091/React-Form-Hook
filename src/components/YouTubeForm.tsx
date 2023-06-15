import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const YouTubeForm = () => {
  const {register, control, handleSubmit, formState} = useForm<FormValues>();

  // Note things are 
  // Register is for Managing the data and Validation
  // Control is for Devtool for us to understand the things
  // handleSubmit is for the submission of the data
  // formState is focused to show errors for now

  // For fields we need to create following interface
  // And do not forget to pass it to useForm hook and data to gather.
  type FormValues = {
    username:string,
  email:string,
  channel: string
}

const onSubmit = (data:FormValues) => {
  console.log(data)
 }

    return (
     <>
       <div>
        <h1>YouTube Form</h1>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register('username', {
            // Here it goes for validations
            required:"User Name is required."
          })}/>
          <p style={{color:'red'}}>{formState.errors.username?.message}</p>
  
          <label htmlFor="email">E-mail</label>
          {/* Validations with the Validation messages */}
          <input type="email" id="email" {...register('email',{
            // Here it goes for validations
            required:"Email Name is required.",
            max:{
              value: 20,
              message: "email can not be more than 20 char"
            }
          })}/>
           {/* showing error here */}
          <p style={{color:'red'}}>{formState.errors.email?.message}</p>
          <label htmlFor="channel">Channel</label>

          {/* Trting custom validation in this field, that should not accept adimn value */}
          <input type="text" id="channel" {...register('channel',{
            validate: {
              
            }
          })} />
  
          <button>Submit</button>
        </form>
      </div>
      <DevTool control={control}/>
     </>
    );
  };