import Masonry from "react-masonry-css";
import Container from "react-bootstrap/esm/Container";

//Styles
import "./Home.css";

//Components
import Entry from "./Entry.js";

const breakpointColumnsObj = {
  default: 4,
  1600: 3,
  1300: 2,
  825: 1,
};

export default function EntriesList({ entries }) {
  return (
    <Container fluid className="entries-list">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {entries.map((entry) => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </Masonry>
    </Container>
  );
}
