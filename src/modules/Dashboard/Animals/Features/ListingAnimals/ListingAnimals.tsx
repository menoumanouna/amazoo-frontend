import {
  Box,
  Button,
  Pagination,
  Stack,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import DataTable from "../../../../../components/DataTable/DataTable";
import { useModal } from "../../../../../hooks/useModal";
import UpdateAnimalModal from "../UpdateAnimal/UpdateAnimal.modal";
import { IAnimal } from "../../shared/interfaces/animal.interface";
import DeleteAnimalModal from "../DeleteAnimal/DeleteAnimal.modal";
import BaseTableCell from "../../../../../components/DataTable/components/BaseTableCell";
import {
  Dispatch,
  Ref,
  SetStateAction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import useDebounce from "../../../../../hooks/useDebounce";
import { DEFAULT_DEBOUNCE_DELAY } from "../../../../../config/global.config";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/BorderColorOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PointAnimalModal from "../PointAnimal/PointAnimal.modal";
import { usePagination } from "../../../../../hooks/usePagination";
import { useGetAnimalsQuery } from "../../../../../redux/apis/animal/animal.api";
import { useAppSelector } from "../../../../../redux/hooks/useAppRTK";
const ListingAnimals = (
  {}: {},
  ref: Ref<{ setKeyword: Dispatch<SetStateAction<string | undefined>> }>
) => {
  const updateModalRef = useRef<{
    setAnimal: Dispatch<SetStateAction<IAnimal | undefined>>;
    handleOpen: () => void;
  }>(null);
  const pointModalRef = useRef<{
    setAnimal: Dispatch<
      SetStateAction<
        | {
            animal: IAnimal;
            history: {
              id: number;
              date: Date;
              reference: string;
              etat: string;
              nourriture: string;
              grammage: string;
              details: string;
            }[];
          }
        | undefined
      >
    >;
    handleOpen: () => void;
  }>(null);
  const theme = useTheme();
  const [keyword, setKeyword] = useState<string>();
  const debouncedKeyword = useDebounce(keyword, DEFAULT_DEBOUNCE_DELAY);

  const { paginator, setPage, syncPage, currentPage, setTotal } =
    usePagination();
  const { data, isLoading } = useGetAnimalsQuery({
    page: paginator.page,
    limit: paginator.perPage,
    keyword: debouncedKeyword === undefined ? undefined : debouncedKeyword,
  });
  const [animals, setAnimals] = useState();
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    if (!isLoading && data) {
      setAnimals(data.animals);
      setTotal(data.count);
      syncPage();
    }
  }, [data, isLoading]);
  useImperativeHandle(ref, () => ({ setKeyword }));

  const {
    open: isDeleteModalOpen,
    handleClose: handleCloseDeleteModal,
    handleOpen: handleOpenDeleteModal,
    mutableData: deletableData,
    setMutableData: setDeletableData,
  } = useModal<IAnimal>();

  const handleEdit = (animal: IAnimal) => {
    return () => {
      updateModalRef.current?.setAnimal({ ...animal });
      updateModalRef.current?.handleOpen();
    };
  };
  const handleDelete = (animal: IAnimal) => {
    return () => {
      setDeletableData({ ...animal });
      handleOpenDeleteModal();
    };
  };
  const currentUser = useAppSelector((state) => state.auth.user);
  const handlePoint = (animal: IAnimal) => {
    //TODO:: fetch history of animal (comptes rendus)
    const history = [
      {
        id: 1,
        reference: "Compte rendu 1 ",
        date: new Date(),
        etat: "string",
        nourriture: "string",
        grammage: "string",
        details: "string",
      },
    ];
    return () => {
      pointModalRef.current?.setAnimal({ animal, history });
      pointModalRef.current?.handleOpen();
    };
  };
  const header = ["Title", "Race de l'animal", "Nombre des vues", "Actions"];

  const [actions, setActions] = useState([
    {
      label: "Delete",
      onClick: handleDelete,
      component: DeleteIcon,
      componentStyle: {
        color: theme.palette.text.disabled,
        cursor: "pointer",
        "&:hover": {
          color: theme.palette.error.dark,
        },
      },
    },
    {
      label: "Edit",
      onClick: handleEdit,
      component: EditIcon,
      componentStyle: {
        color: theme.palette.text.disabled,
        cursor: "pointer",
        "&:hover": {
          color: theme.palette.primary.light,
        },
      },
    },
  ]);
  useEffect(() => {
    if (currentUser && ["ADMIN", "VETERINAIRE"].includes(currentUser.type)) {
      setActions((prev) => [
        {
          label: "Delete",
          onClick: handleDelete,
          component: DeleteIcon,
          componentStyle: {
            color: theme.palette.text.disabled,
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.error.dark,
            },
          },
        },
        {
          label: "Edit",
          onClick: handleEdit,
          component: EditIcon,
          componentStyle: {
            color: theme.palette.text.disabled,
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.primary.light,
            },
          },
        },
        {
          label: "Compte rendu",
          onClick: handlePoint,
          component: ReceiptLongIcon,
          componentStyle: {
            color: theme.palette.text.disabled,
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.primary.light,
            },
          },
        },
      ]);
    }
  }, [currentUser]);

  return (
    <Box>
      <Typography>
        {debouncedKeyword && <div>{`Searching for ${debouncedKeyword}`}</div>}
      </Typography>
      <DataTable header={header}>
        {animals &&
          animals.map((animal: any) => {
            return (
              <TableRow key={animal.id}>
                <BaseTableCell>{animal.name}</BaseTableCell>
                <BaseTableCell align="right">{animal.race}</BaseTableCell>
                <BaseTableCell align="right">{animal.views ?? 0}</BaseTableCell>
                <BaseTableCell align="right">
                  <Stack
                    direction={"row-reverse"}
                    alignItems={"center"}
                    spacing={1}
                  >
                    {actions &&
                      actions.map((action, index) =>
                        action.component ? (
                          <action.component
                            key={index}
                            onClick={action.onClick(animal)}
                            sx={action.componentStyle}
                          />
                        ) : (
                          <Button
                            key={index}
                            onClick={() => action.onClick(animal)}
                          >
                            {action.label}
                          </Button>
                        )
                      )}
                  </Stack>
                </BaseTableCell>
              </TableRow>
            );
          })}
      </DataTable>
      <Stack direction={"row-reverse"} my={2}>
        <Pagination
          count={Math.ceil(paginator.total / paginator.perPage)}
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
      <UpdateAnimalModal ref={updateModalRef} />
      <PointAnimalModal ref={pointModalRef} />
      <DeleteAnimalModal
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        animal={deletableData}
        dialogContent="Êtes-vous sûr de vouloir supprimer cet animal ?"
        dialogTitle="Supprimer l'animal"
      />
    </Box>
  );
};

export default forwardRef(ListingAnimals);
