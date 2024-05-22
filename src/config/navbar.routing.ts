export const navbarRouting = (
  handleRedirect: (path: string) => () => void,
  handleOpenContactModal: () => void,
  handleOpenFeedBack: () => void
) => [
  {
    name: "Accueil",
    path: "/",
    onclick: handleRedirect("/"),
  },
  {
    name: "Habitats",
    path: "/habitates",
    onclick: handleRedirect("/habitates"),
  },
  {
    name: "Services",
    path: "/services",
    onclick: handleRedirect("/services"),
  },
  {
    name: "Contact",
    path: "/contact",
    onclick: handleOpenContactModal,
  },
  {
    name: "Avis",
    path: "/avis",
    onclick: handleOpenFeedBack,
  },
];
