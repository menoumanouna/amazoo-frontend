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
import UpdateHabitatModal from "../UpdateHabitat/UpdateHabitatModal";
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
import { IHabitat } from "../../shared/interfaces/habitat.interface";
import DeleteHabitatModal from "../DeleteHabitat/DeleteHabitatModal";
import useDebounce from "../../../../../hooks/useDebounce";
import { DEFAULT_DEBOUNCE_DELAY } from "../../../../../config/global.config";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/BorderColorOutlined";
import { usePagination } from "../../../../../hooks/usePagination";
import { useGetHabitatsQuery } from "../../../../../redux/apis/habitat/habitat.api";
const ListingHabitats = (
  {}: {},
  ref: Ref<{ setKeyword: Dispatch<SetStateAction<string | undefined>> }>
) => {
  const updateModalRef = useRef<{
    setHabitat: Dispatch<SetStateAction<IHabitat | undefined>>;
    handleOpen: () => void;
  }>(null);
  const [keyword, setKeyword] = useState<string>();

  const debouncedKeyword = useDebounce(keyword, DEFAULT_DEBOUNCE_DELAY);

  const { paginator, setPage, syncPage, currentPage, setTotal } =
    usePagination();
  const { data, isLoading } = useGetHabitatsQuery({
    page: paginator.page,
    limit: paginator.perPage,
    keyword: debouncedKeyword === undefined ? undefined : debouncedKeyword,
  });
  const [habitats, setHabitats] = useState<IHabitat[]>();
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    if (!isLoading && data) {
      setHabitats(data.habitats);
      setTotal(data.count);
      syncPage();
    }
  }, [data, isLoading]);
  const theme = useTheme();

  useImperativeHandle(ref, () => ({ setKeyword }));

  const {
    open: isDeleteModalOpen,
    handleClose: handleCloseDeleteModal,
    handleOpen: handleOpenDeleteModal,
    mutableData: deletableData,
    setMutableData: setDeletableData,
  } = useModal<IHabitat>();

  const handleEdit = (habitat: IHabitat) => {
    return () => {
      updateModalRef.current?.setHabitat({ ...habitat });
      updateModalRef.current?.handleOpen();
    };
  };
  const handleDelete = (habitat: IHabitat) => {
    return () => {
      setDeletableData({ ...habitat });
      handleOpenDeleteModal();
    };
  };

  const header = ["Title", "Description", "Actions"];

  const actions = [
    {
      label: "Delete",
      onClick: handleDelete,
      component: DeleteIcon,
      componentStyle: {
        color: theme.palette.error.main,
        cursor: "pointer",
      },
    },
    {
      label: "Edit",
      onClick: handleEdit,
      component: EditIcon,
      componentStyle: {
        color: theme.palette.action.active,
        cursor: "pointer",
      },
    },
  ];

  return (
    <Box>
      <Typography>
        {debouncedKeyword && <div>{`Searching for ${debouncedKeyword}`}</div>}
      </Typography>
      <DataTable header={header}>
        {habitats &&
          habitats.map((habitat: IHabitat) => {
            return (
              <TableRow key={habitat.id}>
                <BaseTableCell>{habitat.name}</BaseTableCell>
                <BaseTableCell align="right">
                  {habitat.description}
                </BaseTableCell>
                <BaseTableCell align="right">
                  <Stack
                    direction={"row-reverse"}
                    alignItems={"center"}
                    spacing={1}
                  >
                    {actions.map((action, index) =>
                      action.component ? (
                        <action.component
                          key={index}
                          onClick={action.onClick(habitat)}
                          sx={action.componentStyle}
                        />
                      ) : (
                        <Button
                          key={index}
                          onClick={() => action.onClick(habitat)}
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
      <UpdateHabitatModal ref={updateModalRef} />
      <DeleteHabitatModal
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        habitat={deletableData}
        dialogContent="Êtes-vous sûr de vouloir supprimer cet habitat ?"
        dialogTitle="Supprimer l'habitat"
      />
    </Box>
  );
};

export default forwardRef(ListingHabitats);
