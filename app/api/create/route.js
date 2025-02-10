import { StreamChat } from "stream-chat"
const api_key="rdx86sadbwun";
const api_secret="amauw2knfqfc8yf6662szjrdpgwk9sm8vn48xgsefczz9n2343kbqwqm63v8sa9e";
const user_id="user_2sqG4jko5Zh2lpvGW576fcT5QoP";

export async function GET() {
    const serverClient = StreamChat.getInstance(api_key,api_secret);
    //create user Token
    const token=serverClient.createToken(user_id)
    console.log(token)
    return Response.json({ message: 'Hello World' })
}