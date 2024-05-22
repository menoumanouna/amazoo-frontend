import {
  Box,
  Button,
  Stack,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import DataTable from "../../../../../components/DataTable/DataTable";
import { useModal } from "../../../../../hooks/useModal";
import UpdateHabitatModal from "../UpdateHabitat/UpdateCategoryHabitatModal";
import BaseTableCell from "../../../../../components/DataTable/components/BaseTableCell";
import {
  Dispatch,
  Ref,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ICategoryHabitat } from "../../shared/interfaces/category-habitat.interface";
import DeleteHabitatModal from "../DeleteHabitat/DeleteHabitatModal";
import useDebounce from "../../../../../hooks/useDebounce";
import { DEFAULT_DEBOUNCE_DELAY } from "../../../../../config/global.config";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/BorderColorOutlined";
const ListingCategoryHabitats = (
  {}: {},
  ref: Ref<{ setKeyword: Dispatch<SetStateAction<string | undefined>> }>
) => {
  const updateModalRef = useRef<{
    setCategoryHabitat: Dispatch<SetStateAction<ICategoryHabitat | undefined>>;
    handleOpen: () => void;
  }>(null);

  const theme = useTheme();
  const [keyword, setKeyword] = useState<string>();

  useImperativeHandle(ref, () => ({ setKeyword }));

  const debouncedKeyword = useDebounce(keyword, DEFAULT_DEBOUNCE_DELAY);

  const {
    open: isDeleteModalOpen,
    handleClose: handleCloseDeleteModal,
    handleOpen: handleOpenDeleteModal,
    mutableData: deletableData,
    setMutableData: setDeletableData,
  } = useModal<ICategoryHabitat>();

  const handleEdit = (categoryHabitat: ICategoryHabitat) => {
    return () => {
      updateModalRef.current?.setCategoryHabitat({ ...categoryHabitat });
      updateModalRef.current?.handleOpen();
    };
  };
  const handleDelete = (categoryHabitat: ICategoryHabitat) => {
    return () => {
      setDeletableData({ ...categoryHabitat });
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
  //TODO:: fetch data from backend
  const data: ICategoryHabitat[] = [
    {
      id: 1,
      title: "Category Habitat 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Category Habitat 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Category Habitat 3",
      description: "Description 3",
    },
  ];
  return (
    <Box>
      <Typography>
        {debouncedKeyword && <div>{`Searching for ${debouncedKeyword}`}</div>}
      </Typography>
      <DataTable header={header}>
        {data.map((categoryHabitat) => {
          return (
            <TableRow key={categoryHabitat.id}>
              <BaseTableCell>{categoryHabitat.title}</BaseTableCell>
              <BaseTableCell align="right">
                {categoryHabitat.description}
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
                        onClick={action.onClick(categoryHabitat)}
                        sx={action.componentStyle}
                      />
                    ) : (
                      <Button
                        key={index}
                        onClick={() => action.onClick(categoryHabitat)}
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
      <UpdateHabitatModal ref={updateModalRef} />
      <DeleteHabitatModal
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        categoryHabitat={deletableData}
        dialogContent="Are you sure you want to delete this category habitat?"
        dialogTitle="Delete category habitat"
      />
    </Box>
  );
};

export default forwardRef(ListingCategoryHabitats);
