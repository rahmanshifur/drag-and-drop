import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DragAndDropContainer = ({ columns, onDragEnd }) => {
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={{ xs: 3, lg: 4 }}>
          {columns.map((column) => (
            <Grid item xs={12} md={4} key={String(column.id)}>
              <Droppable droppableId={String(column.id)}>
                {(provided) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    sx={{
                      background: "#f4f5f7",
                      padding: "16px",
                      borderRadius: "4px",
                      minHeight: "300px", // Ensure there's some height for dropping items
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
                              userSelect: "none",
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
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Container>
  );
};

export default DragAndDropContainer;
