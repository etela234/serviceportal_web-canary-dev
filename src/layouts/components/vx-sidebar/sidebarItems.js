/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [

  {
    url: "/app",
    name: "Dashboard",
    slug: "Dashboard",
    icon: "HomeIcon",
    permission: "guest"
  },
  {
    url: "/app/Settings",
    name: "Settings",
    slug: "Settings",
    icon: "SettingsIcon",
    permission: "guest"
  },
  {
    url: "/app/users",
    name: "Users Management",
    slug: "Users",
    icon: "UsersIcon",
    permission: "guest"
  },
  {
    url: "/app/Documents",
    name: "Documents",
    slug: "Documents",
    icon: "BarChart2Icon",
    permission: "guest"
  },

  {
    url: "/app/Products",
    name: "Products",
    slug: "Products",
    icon: "UserCheckIcon",
    permission: "guest"
  },
  {
    url: "/app/self-care",
    name: "SelfCare",
    slug: "self-care",
    icon: "MessageCircleIcon",
    permission: "guest"
  },
  {
    url: "/app/messages",
    name: "Messages",
    slug: "messages",
    icon: "MessageSquareIcon",
    permission: "guest"
  },
]
