import { Box, Paper, Typography } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DragAndDropContainer = ({ columns, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        sx={{ display: "flex", gap: "16px", justifyContent: "space-between" }}
      >
        {columns.map((column) => (
          <Droppable key={String(column.id)} droppableId={String(column.id)}>
            {(provided) => (
              <Box
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{
                  background: "#f4f5f7",
                  padding: "16px",
                  borderRadius: "4px",
                  minWidth: "300px",
                  maxWidth: "300px",
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: "16px" }}>
                  {column.title}
                </Typography>
                {column.items.map((item, index) => (
                  <Draggable
                    key={String(item.id)}
                    draggableId={String(item.id)}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <Paper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          padding: "16px",
                          marginBottom: "8px",
                          backgroundColor: snapshot.isDragging
                            ? "lightblue"
                            : "white",
                          userSelect: "none", // Prevent text selection
                          border: snapshot.isDragging
                            ? "2px solid #007bff"
                            : "none",
                        }}
                      >
                        <Typography variant="body1">{item.title}</Typography>
                        <Typography variant="body2">{item.content}</Typography>
                      </Paper>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        ))}
      </Box>
    </DragDropContext>
  );
};

export default DragAndDropContainer;
