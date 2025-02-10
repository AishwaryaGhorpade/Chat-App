import ChatForum from '@/components/ChatForum';

// your Stream app information


export default async function Page({params}) {
        
    const slug=(await params).slug
    return <ChatForum/>
}