import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import UserList from '@/components/user/UserList'
import UserPage from '@/components/user/UserPage'
import UserProfile from '@/components/user/UserProfile'
import UserFormEdit from '@/components/user/UserFormEdit'
import UserForm from '@/components/user/UserForm'

import AdminList from '@/components/admin/AdminList'
import AdminPage from '@/components/admin/AdminPage'
import AdminForm from '@/components/admin/AdminForm'
import AdminFormEdit from '@/components/admin/AdminFormEdit'

import DeviceList from '@/components/device/DeviceList'
import DeviceByChannelList from '@/components/device/DeviceByChannelList'
import DevicePage from '@/components/device/DevicePage'
import DeviceForm from '@/components/device/DeviceForm'
import DeviceFormEdit from '@/components/device/DeviceFormEdit'

import MessageList from '@/components/message/MessageList'
import MessagePage from '@/components/message/MessagePage'
import MessageForm from '@/components/message/MessageForm'

import ChannelList from '@/components/channel/ChannelList'
import ChannelByDeviceList from '@/components/channel/ChannelByDeviceList'
import ChannelPage from '@/components/channel/ChannelPage'
import ChannelForm from '@/components/channel/ChannelForm'
import ChannelFormEdit from '@/components/channel/ChannelFormEdit'

import LoginForm from '@/components/LoginForm'
import ErrorPage from '@/components/ErrorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/error', name: 'error', component: ErrorPage},
    {path: '/registration', name: 'registration', component: UserForm},

    {path: '/user', name: 'userList', component: UserList},
    {path: '/user/:id', name: 'userPage', component: UserPage },
    {path: '/profile', name: 'userProfile', component: UserProfile },
    {path: '/user/:id/edit', name: 'userEdit', component: UserFormEdit},

    {path: '/admin', name: 'adminList', component: AdminList},
    {path: '/admin/create', name: 'adminCreate', component: AdminForm},
    {path: '/admin/:id', name: 'adminPage', component: AdminPage },
    {path: '/admin/:id/edit', name: 'adminEdit', component: AdminFormEdit},


    {path: '/device', name: 'deviceList', component: DeviceList},
    {path: '/device/channel/:id', name: 'deviceByChannelList', component: DeviceByChannelList},
    {path: '/device/create', name: 'deviceCreate', component: DeviceForm},
    {path: '/device/:id', name: 'devicePage', component: DevicePage},
    {path: '/device/:id/edit', name: 'deviceEdit', component: DeviceFormEdit},

    {path: '/message/channel/:id', name: 'messageList', component: MessageList},
    {path: '/message/:id', name: 'messagePage', component: MessagePage},

    {path: '/channel', name: 'channelList', component: ChannelList,},
    {path: '/channel/device/:id', name: 'channelByDeviceList', component: ChannelByDeviceList,},
    {path: '/channel/create', name: 'channelCreate', component: ChannelForm},
    {path: '/channel/:id', name: 'channelPage', component: ChannelPage},
    {path: '/channel/:id/edit', name: 'channelEdit', component: ChannelFormEdit},
    {path: '/channel/:id/message', name: 'messageCreate', component: MessageForm},

    {path: '/login', name: 'login', component: LoginForm}
  ]
})
