import { useEffect, useState } from "react";
import { baseAppColors } from "../../config/color.constants";
import ActualityModule from "../../modules/Landing/Actuality/Main/Actuality";
import { useGetAnimalsQuery } from "../../redux/apis/animal/animal.api";
import { useGetHabitatsQuery } from "../../redux/apis/habitat/habitat.api";
import { useGetServicesQuery } from "../../redux/apis/services/service.api";
import { appendBaseUrl } from "../../utils/helpers";

function Actuality() {
  const { data: servicesApi, isLoading: isLoadingService } =
    useGetServicesQuery({
      limit: 100,
      page: 1,
    });
  const { data: habitatsApi, isLoading: isLoadingHabitat } =
    useGetHabitatsQuery({
      limit: 100,
      page: 1,
    });
  const { data: animalsApi, isLoading: isLoadingAnimal } = useGetAnimalsQuery({
    limit: 100,
    page: 1,
  });
  const [actualities, setActualities] = useState<any>([]);
  useEffect(() => {
    if (
      !isLoadingAnimal &&
      !isLoadingService &&
      !isLoadingHabitat &&
      servicesApi &&
      habitatsApi &&
      animalsApi
    ) {
      const preActualties = [
        {
          title: "AMAZOO",
          description: "",
          images: [
            {
              src: "/logo.png",
              alt: "actualityImage",
            },
          ],
          backgroundImage:
            "https://img.freepik.com/premium-photo/kids-feeding-giraffe_1308-41372.jpg?w=1060",
          floating: true,
          textColor: "white",
          textSpacing: 0,
          alignText: "center",
          withgradient: "true",
        },
        {
          title: "Bienvenu à AMAZOO",
          subHeader: "Découvrez la magie du monde animal !",
          description:
            "Notre parc offre une expérience immersive pour les amoureux de la faune. De l'élégance des girafes à la grâce des dauphins, chaque rencontre est une invitation à l'émerveillement. Avec des habitats spacieux et sécurisés, nous offrons un environnement où les animaux peuvent s'épanouir. ",
          images: [
            {
              src: `${process.env.REACT_APP_API_BASE_URL}/public/images/ressources/home_1.png`,
              alt: "landing-card-image",
            },
          ],
          backgroundColor: baseAppColors.FIRST_GRADIENT,
          floating: false,
          textSpacing: 4,
          alignText: "left",
          direction: "row",
          textColor: "white",
        },
        {
          title: "Explorez des habitats exceptionnels AMAZOO",
          mainHolderSpacing: 15,
          description:
            "Des océans aux terres, découvrez la diversité de la vie sauvage dans des environnements fascinants.",
          backgroundColor: baseAppColors.THIRD_GRADIENT,
          textColor: "black",
          images: habitatsApi.habitats.map((habitat: any) => ({
            src: appendBaseUrl(habitat.images?.[0]),
            alt: habitat.name,
          })),
          alignText: "left",
          floating: false,
          backgroundImage: "backgroundImage",
          withImageAlt: true,
          textFullWidth: true,
        },
        {
          title: "Découvrez une gamme complète de services amazoo",
          mainHolderSpacing: 15,
          description:
            "Plongez dans une journée d'aventure sans soucis avec nos services bien pensés .",
          backgroundColor: baseAppColors.SECOND_GRADIENT,
          textColor: "white",
          images: servicesApi.services.map((service: any) => ({
            src: appendBaseUrl(service.images?.[0]),
            alt: service.name,
          })),
          alignText: "left",
          floating: false,
          backgroundImage: "backgroundImage",
          withImageAlt: true,
          textFullWidth: true,
        },
        {
          title: "Explorez la Diversité de Notre Faune !",
          mainHolderSpacing: 15,
          description:
            "Découvrez une collection impressionnante d'animaux provenant des quatre coins du globe.",
          backgroundColor: baseAppColors.FIRST_GRADIENT,
          images: animalsApi.animals.map((animal: any) => ({
            src: appendBaseUrl(animal.images?.[0]),
            alt: animal.name,
          })),
          alignText: "left",
          floating: false,
          backgroundImage: "backgroundImage",
          withImageAlt: true,
          textFullWidth: true,
          textColor: "white",
        },
      ];
      setActualities(preActualties);
    }
  }, [
    servicesApi,
    habitatsApi,
    animalsApi,
    isLoadingAnimal,
    isLoadingService,
    isLoadingHabitat,
  ]);

  return (
    <>
      <ActualityModule actualities={actualities} />
    </>
  );
}

export default Actuality;
