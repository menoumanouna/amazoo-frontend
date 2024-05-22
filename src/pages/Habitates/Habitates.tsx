import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { baseAppColors } from "../../config/color.constants";
import HabitatDetailModal from "../../modules/Landing/Habitates/HabitatDetail/HabitatDetailsModal";
import HabitatesModule from "../../modules/Landing/Habitates/Main/Habitates";
import { useGetHabitatsQuery } from "../../redux/apis/habitat/habitat.api";
import { appendBaseUrl } from "../../utils/helpers";
import Icon from "../../assets/icon.svg";
import { habitatsCategories } from "../../modules/Dashboard/Habitats/shared/config/habitats.categories";
import { reArrangeCategories } from "../../modules/Dashboard/Habitats/shared/utils/habitat.helpers";
function Habitates() {
  const habitatModalRef = useRef<{
    setHabitat: Dispatch<SetStateAction<any>>;
    handleOpen: () => void;
  }>(null);
  const handleOpenOneImage = (data: any) => {
    return () => {
      habitatModalRef.current?.setHabitat(data);
      habitatModalRef.current?.handleOpen();
    };
  };
  const { data: habitatsApi, isLoading } = useGetHabitatsQuery({
    limit: 100,
    page: 1,
  });
  const [habitates, setHabitates] = useState<any>([]);
  useEffect(() => {
    if (!isLoading && habitatsApi) {
      const prH = reArrangeCategories(habitatsApi.habitats);
      const preHabitates = [
        {
          title: "Découvrez amazoo",
          mainHolderSpacing: 15,
          description:
            "où chaque habitat est une invitation à explorer les merveilles de la nature. \n Plongeons ensemble dans les détails de nos habitats principaux",
          images: [
            {
              src: "/logo.png",
              alt: "habitImage",
            },
          ],
          floating: false,
          backgroundImage:
            "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8em9vfGVufDB8fDB8fHww",
          withgradient: "true",
          direction: "row",
          divided: true,
          topradius: 0,
        },
        {
          title: habitatsCategories[0].label,
          description: habitatsCategories[0].description,
          backgroundColor: baseAppColors.FIRST_GRADIENT,
          mainHolderSpacing: 15,
          images: prH[1]?.map((habitat) => ({
            src: appendBaseUrl(habitat.images?.[0]),
            alt: habitat.name,
            onClick: handleOpenOneImage({
              title: habitat.name,
              description: habitat.description,
              images: habitat.animals.map((animal) => ({
                animalId: animal.id,
                src: appendBaseUrl(animal.images?.[0]),
                alt: animal.name,
                habitatTitle: habitat.name,
                animalTitle: animal.name,
                animalDescription: animal.race,
                avis: {
                  etat: "Bonne santé",
                  nourriture: "Poissons, crustacés, algues",
                  grammage: "X grammes par jour",
                  datePassage: "24/05/2024",
                  detail: "Aucun problème à signaler",
                },
              })),
            }),
          })),
          alignText: "left",
          floating: false,
          backgroundImage: "backgroundImage",
          withImageAlt: true,
          textFullWidth: true,
          textColor: "white",
        },
        {
          title: habitatsCategories[1].label,
          description: habitatsCategories[1].description,
          backgroundColor: baseAppColors.SECOND_GRADIENT,
          mainHolderSpacing: 15,
          images: prH[2]?.map((habitat) => ({
            src: appendBaseUrl(habitat.images?.[0]),
            alt: habitat.name,
            onClick: handleOpenOneImage({
              title: habitat.name,
              description: habitat.description,
              images: habitat.animals.map((animal) => ({
                animalId: animal.id,
                src: appendBaseUrl(animal.images?.[0]),
                alt: animal.name,
                habitatTitle: habitat.name,
                animalTitle: animal.name,
                animalDescription: animal.race,
                avis: {
                  etat: "Bonne santé",
                  nourriture: "Poissons, crustacés, algues",
                  grammage: "X grammes par jour",
                  datePassage: "24/05/2024",
                  detail: "Aucun problème à signaler",
                },
              })),
            }),
          })),
          alignText: "left",
          floating: false,
          backgroundImage: "backgroundImage",
          withImageAlt: true,
          textFullWidth: true,
          textColor: "white",
        },
        {
          title: habitatsCategories[2].label,
          description: habitatsCategories[2].description,
          backgroundColor: baseAppColors.THIRD_GRADIENT,
          mainHolderSpacing: 15,
          images: prH[3]?.map((habitat) => ({
            src: appendBaseUrl(habitat.images?.[0]),
            alt: habitat.name,
            onClick: handleOpenOneImage({
              title: habitat.name,
              description: habitat.description,
              images: habitat.animals.map((animal) => ({
                animalId: animal.id,
                src: appendBaseUrl(animal.images?.[0]),
                alt: animal.name,
                habitatTitle: habitat.name,
                animalTitle: animal.name,
                animalDescription: animal.race,
                avis: {
                  etat: "Bonne santé",
                  nourriture: "Poissons, crustacés, algues",
                  grammage: "X grammes par jour",
                  datePassage: "24/05/2024",
                  detail: "Aucun problème à signaler",
                },
              })),
            }),
          })),
          alignText: "left",
          floating: false,
          backgroundImage: "backgroundImage",
          withImageAlt: true,
          textFullWidth: true,
          textColor: "white",
        },
      ];
      setHabitates(preHabitates);
    }
  }, [habitatsApi, isLoading]);

  return (
    <>
      <HabitatesModule habitates={habitates} />
      <HabitatDetailModal ref={habitatModalRef} />
    </>
  );
}

export default Habitates;
