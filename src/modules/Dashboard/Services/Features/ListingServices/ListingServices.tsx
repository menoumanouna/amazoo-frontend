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
import UpdateServiceModal from "../UpdateService/UpdateService.modal";
import { IService } from "../../shared/interfaces/service.interface";
import DeleteServiceModal from "../DeleteService/DeleteService.modal";
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
import { usePagination } from "../../../../../hooks/usePagination";
import { useGetServicesQuery } from "../../../../../redux/apis/services/service.api";
const ListingServices = (
  {}: {},
  ref: Ref<{ setKeyword: Dispatch<SetStateAction<string | undefined>> }>
) => {
  const updateModalRef = useRef<{
    setService: Dispatch<SetStateAction<IService | undefined>>;
    handleOpen: () => void;
  }>(null);
  const theme = useTheme();
  const [keyword, setKeyword] = useState<string>();
  const debouncedKeyword = useDebounce(keyword, DEFAULT_DEBOUNCE_DELAY);

  const { paginator, setPage, syncPage, currentPage, setTotal } =
    usePagination();
  const { data, isLoading } = useGetServicesQuery({
    page: paginator.page,
    limit: paginator.perPage,
    keyword: debouncedKeyword === undefined ? undefined : debouncedKeyword,
  });
  const [services, setServices] = useState<IService[]>();
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    if (!isLoading && data) {
      setServices(data.services);
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
  } = useModal<IService>();

  const handleEdit = (service: IService) => {
    return () => {
      updateModalRef.current?.setService({ ...service });
      updateModalRef.current?.handleOpen();
    };
  };
  const handleDelete = (service: IService) => {
    return () => {
      setDeletableData({ ...service });
      handleOpenDeleteModal();
    };
  };

  const header = ["Title", "Description", "Horaire", "Actions"];

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
        {services &&
          services.map((service: IService) => {
            return (
              <TableRow key={service.id}>
                <BaseTableCell>{service.name}</BaseTableCell>
                <BaseTableCell align="right">
                  {service.description}
                </BaseTableCell>
                <BaseTableCell align="right">{service.horaire}</BaseTableCell>
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
                          onClick={action.onClick(service)}
                          sx={action.componentStyle}
                        />
                      ) : (
                        <Button
                          key={index}
                          onClick={() => action.onClick(service)}
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
      <UpdateServiceModal ref={updateModalRef} />
      <DeleteServiceModal
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        service={deletableData}
        dialogContent="Êtes-vous sûr de vouloir supprimer ce service ?"
        dialogTitle="Supprimer le service"
      />
    </Box>
  );
};

export default forwardRef(ListingServices);
