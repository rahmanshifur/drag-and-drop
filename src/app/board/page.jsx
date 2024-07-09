"use client";

import PrimaryBtnLink from "@/components/ui/PrimaryBtnLink";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DragAndDropContainer from "../../components/DragAndDropContainer";
import { setLayout } from "../../store/features/appSlice";

const DragAndDropPage = () => {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.app.layout);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceColumn = layout.find(
      (col) => col.id === String(source.droppableId)
    );
    const destColumn = layout.find(
      (col) => col.id === String(destination.droppableId)
    );

    const sourceItems = Array.from(sourceColumn.items);

    if (source.droppableId === destination.droppableId) {
      const [removed] = sourceItems.splice(source.index, 1);
      sourceItems.splice(destination.index, 0, removed);

      const newLayout = layout.map((col) =>
        col.id === String(source.droppableId)
          ? { ...col, items: sourceItems }
          : col
      );

      dispatch(setLayout(newLayout));
    } else {
      const destItems = Array.from(destColumn.items);
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      const newLayout = layout.map((col) => {
        if (col.id === String(source.droppableId)) {
          return { ...col, items: sourceItems };
        }
        if (col.id === String(destination.droppableId)) {
          return { ...col, items: destItems };
        }
        return col;
      });

      dispatch(setLayout(newLayout));
    }
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Box sx={{ marginLeft: { lg: '90px', sx: '0px' } }}>
        <Typography variant="h4" sx={{ marginBottom: "16px" }}>
          Client Regimen Request
        </Typography>
        <Box sx={{ margin: '22px 0px' }} >
          <PrimaryBtnLink text={'Add New One'} href={'/'} />
        </Box>
      </Box>
      <DragAndDropContainer columns={layout} onDragEnd={handleDragEnd} />
    </Box>
  );
};

export default DragAndDropPage;
