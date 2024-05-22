import { useEffect, useState } from "react";
import { baseAppColors } from "../../config/color.constants";
import ServicesModule from "../../modules/Landing/Services/Main/Services";
import { useGetServicesQuery } from "../../redux/apis/services/service.api";
import { appendBaseUrl } from "../../utils/helpers";
export const getThreeRandomElements = (array) => {
  const result = [];
  const usedIndices = new Set<number>();

  while (result.length < 3 && result.length < array.length) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      result.push(array[randomIndex]);
    }
  }

  return result;
};
function Services() {
  const { data: servicesApi, isLoading } = useGetServicesQuery({
    limit: 100,
    page: 1,
  });
  const [services, setServices] = useState<any>([]);
  useEffect(() => {
    if (!isLoading && servicesApi) {
      const services = [
        {
          title: "Découvrez une gamme complète de services amazoo",
          description:
            "Plongez dans une journée d'aventure sans soucis avec nos services bien pensés ",

          images: [
            {
              src: "/logo.png",
              alt: "serviceImage",
            },
          ],
          floating: false,
          backgroundImage:
            "https://png.pngtree.com/thumb_back/fw800/background/20230718/pngtree-d-illustration-of-an-architecturally-designed-outdoor-coffee-shop-with-a-image_3906640.jpg",
          backgroundColor: baseAppColors.THIRD_GRADIENT,
          withgradient: "true",
        },
        ...servicesApi.services.map((service, index) => {
          const randomColor = index % 3;
          const randomFloating = (index + 1) % 2;
          return {
            floating: Boolean(randomFloating),
            direction: "row",
            textSpacing: 4,
            title: service.name,
            description: service.description,
            subHeader: `Pour tous visites de ${service.horaire} heures`,
            alignText: "left",
            backgroundImage: "backgroundImage",
            withImageAlt: true,
            textFullWidth: true,
            textColor: "white",
            mainHolderSpacing: 15,
            divided: true,
            withCarousel: true,
            images: service.images.map((image: any) => ({
              src: appendBaseUrl(image),
              alt: "",
            })),
            backgroundColor: Object.values(baseAppColors)[randomColor],
          };
        }),
      ];
      setServices(services);
    }
  }, [servicesApi, isLoading]);

  return <ServicesModule services={services} />;
}

export default Services;
