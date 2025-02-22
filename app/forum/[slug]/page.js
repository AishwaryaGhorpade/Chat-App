import ChatForum from '@/components/ChatForum';
import { currentUser, Token } from '@clerk/nextjs/server'

// your Stream app information


export default async function Page({params}) {
    const user = await currentUser()
    const slug=(await params).slug
    return <ChatForum slug={slug} clerkUser={{id:user.id,name:user.firstName,token:user.publicMetadata.token}}/>
}