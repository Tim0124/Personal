interface NavItemProps {
  text: string
  path: string
  iconName: string
}

export const navData:NavItemProps[] = [
  {
    text: "About",
    path: "/about/",
    iconName: "nav-about-icon"
  },
  {
    text: "Projects",
    path: "/projects/",
    iconName: "nav-project-icon"
  },
  {
    text: "Blog",
    path: "/blog/",
    iconName: "nav-blog-icon"
  },
  {
    text: "Contact",
    path: "/contact/",
    iconName: "nav-contact-icon"
  }
]