import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Trash from "../pages/manage/trash/Trash";
import Star from "../pages/manage/star/Star";
import List from "../pages/manage/list/List";
import Edit from "../pages/question/edit";
import Stat from "../pages/question/stat";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'trash',
            element: <Trash />
          },
          {
            path: 'star',
            element: <Star />
          },
        ]
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />
      },
      {
        path: 'stat/:id',
        element: <Stat />
      },
    ]
  },
])

export default router


export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const HOME_PATH = '/'
export const MANAGE_PATH = '/manage'
export const MANAGE_LIST_PATH = '/manage/list'
export const MANAGE_TRASH_PATH = '/manage/trash'
export const MANAGE_STAR_PATH = '/manage/star'
export const QUESTION_PATH = '/question'
export const QUESTION_EDIT_PATH = '/question/edit/:id'
export const QUESTION_STAT_PATH = '/question/stat/:id'