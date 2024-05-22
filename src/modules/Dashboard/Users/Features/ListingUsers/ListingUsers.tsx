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
import UpdateUserModal from "../UpdateUser/UpdateUserModal";
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
import { IUser } from "../../shared/interfaces/user.interface";
import DeleteUserModal from "../DeleteUser/DeleteUserModal";
import useDebounce from "../../../../../hooks/useDebounce";
import { DEFAULT_DEBOUNCE_DELAY } from "../../../../../config/global.config";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/BorderColorOutlined";
import { baseAppColors } from "../../../../../config/color.constants";
import { useGetUsersQuery } from "../../../../../redux/apis/users/user.api";
import { usePagination } from "../../../../../hooks/usePagination";
import { userCategories } from "../../shared/config/user.categories";

const ListingUsers = (
  {}: {},
  ref: Ref<{ setKeyword: Dispatch<SetStateAction<string | undefined>> }>
) => {
  const updateModalRef = useRef<{
    setUser: Dispatch<SetStateAction<IUser | undefined>>;
    handleOpen: () => void;
  }>(null);

  const theme = useTheme();
  const [keyword, setKeyword] = useState<string>();

  const debouncedKeyword = useDebounce(keyword, DEFAULT_DEBOUNCE_DELAY);

  const { paginator, setPage, syncPage, currentPage, setTotal } =
    usePagination();
  const { data, isLoading } = useGetUsersQuery({
    page: paginator.page,
    limit: paginator.perPage,
    keyword: debouncedKeyword === undefined ? undefined : debouncedKeyword,
  });
  const [users, setUsers] = useState<IUser[]>();
  useImperativeHandle(ref, () => ({ setKeyword }));

  const {
    open: isDeleteModalOpen,
    handleClose: handleCloseDeleteModal,
    handleOpen: handleOpenDeleteModal,
    mutableData: deletableData,
    setMutableData: setDeletableData,
  } = useModal<IUser>();

  const handleEdit = (user: IUser) => {
    return () => {
      updateModalRef.current?.setUser({ ...user });
      updateModalRef.current?.handleOpen();
    };
  };
  const handleDelete = (user: IUser) => {
    return () => {
      setDeletableData({ ...user });
      handleOpenDeleteModal();
    };
  };

  const header = ["Email", "Type", "Actions"];

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
  useEffect(() => {
    if (!isLoading && data) {
      setUsers(data.users);
      setTotal(data.count);
      syncPage();
    }
  }, [data, isLoading]);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const typeColor = (type: string) => {
    switch (type) {
      case "EMPLOYE":
        return baseAppColors.FIRST_GRADIENT;
      case "ADMIN":
        return baseAppColors.SECOND_GRADIENT;
      default:
        return baseAppColors.THIRD_GRADIENT;
    }
  };
  return (
    <Box>
      <Typography>
        {debouncedKeyword && <div>{`Searching for ${debouncedKeyword}`}</div>}
      </Typography>
      <DataTable header={header}>
        {users &&
          users.map((user) => {
            return (
              <TableRow key={user.id}>
                <BaseTableCell>{user.email}</BaseTableCell>
                <BaseTableCell align="right">
                  <Stack direction={"row-reverse"}>
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: typeColor(user.type),
                        textAlign: "center",
                        color: "white",
                        borderRadius: 5,
                        cursor: "cell",
                        width: "80%",
                      }}
                    >
                      {
                        userCategories.find(
                          (category) => category.id === user.type
                        )?.label
                      }
                    </Typography>
                  </Stack>
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
                          onClick={action.onClick(user)}
                          sx={action.componentStyle}
                        />
                      ) : (
                        <Button
                          key={index}
                          onClick={() => action.onClick(user)}
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
      <UpdateUserModal ref={updateModalRef} />
      <DeleteUserModal
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        user={deletableData}
        dialogContent="Êtes-vous sûr de vouloir supprimer cet utilisateur ?"
        dialogTitle="Supprimer l'utilisateur"
      />
    </Box>
  );
};

export default forwardRef(ListingUsers);
