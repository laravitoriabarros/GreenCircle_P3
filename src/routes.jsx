import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Pragas } from "./pages/pragas/Pragas";
import { ForumDiscussao } from "./pages/ForumPagDiscussao/ForumDiscussao";
import { ForumHome } from "./pages/forumHome/index";
import { ChatPage } from "./pages/chatPage/ChatPage";
import { Feed } from "./pages/Feed/Feed";
import { ArticleWiki } from "./pages/ArticlePage/ArticleWiki";
import { LoginScreen } from "./pages/LoginPage/LoginScreen";
import { CreateAccount } from "./pages/CreateAccountPage/CreateAccount";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                element: <LoginScreen/>
            },
            {
                path: '/discussao',
                element: <ForumDiscussao/>
            },
            {
                path: '/forumHome',
                element: <ForumHome/>
            },
            {
                path: '/pragas',
                element: <Pragas/>
            },
            {
                path: '/chat',
                element: <ChatPage/>
            },
            {
                path: '/wiki',
                element: <ArticleWiki/>
            },
            {
                path: '/login',
                element: <LoginScreen/>
            },
            {
                path: '/cadastro',
                element: <CreateAccount/>
            },
            {
                path: '/feed',
                element: <Feed/>
            },

        ]
    }  
])