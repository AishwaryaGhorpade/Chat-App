import { StreamChat } from "stream-chat"
import { clerkClient } from '@clerk/nextjs/server'
import { use } from "react";
const api_key = "rdx86sadbwun";
const api_secret = "amauw2knfqfc8yf6662szjrdpgwk9sm8vn48xgsefczz9n2343kbqwqm63v8sa9e";
// const user_id="user_2sqG4jko5Zh2lpvGW576fcT5QoP";
// const user_id="Aish";

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()

    function capitalize(str) {
        if (!str) return ""; // Handle empty string
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //create user Token
    const token = serverClient.createToken(user.data.id)
    console.log("A NEW USER HAS BEEN CREATED", token)

    const client = await clerkClient()
    await serverClient.upsertUser({ id: user.data.id })

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        },
    })

    //give access to this user for all chats
    const slugs = ["python-chat", "javascript-chat", "react-chat", "nodejs-chat", "web-chat", "dataScience-chat"]
    slugs.forEach((item) => {
        client.channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(item) + "Discussion",
            created_by_id: user.data.id
        });
        channel.create()
        channel.addMembers([user.data.id])
    })
    return Response.json({ message: 'Hello World' })
}


// export async function POST(request) {
//     const serverClient = StreamChat.getInstance(api_key, api_secret);
//     const user = await request.json();

//     console.log("Received User Data:", user); // Debugging log

//     if (!user?.data?.id) {
//         return NextResponse.json({ error: "User ID is missing" }, { status: 400 });
//     }

//     const token = serverClient.createToken(user.data.id);
//     console.log("A NEW USER HAS BEEN CREATED", token);

//     await serverClient.upsertUser({
//         id: user.data.id,
//         name: user.data.name || "Anonymous",
//         role: "user",
//     });

//     await clerkClient.users.updateUserMetadata(user.data.id, {
//         publicMetadata: { token },
//     });

//     const slugs = ["python-chat", "javascript-chat", "react-chat", "nodejs-chat", "web-chat", "dataScience-chat"];
//     for (const slug of slugs) {
//         const channel = serverClient.channel("messaging", slug, {
//             image: "https://getstream.io/random_png/?name=react",
//             name: slug.charAt(0).toUpperCase() + slug.slice(1) + " Discussion",
//             created_by_id: user.data.id,
//         });

//         await channel.create();
//         await channel.addMembers([user.data.id]);
//     }

//     return NextResponse.json({ message: "User and channels set up successfully" });
// }
