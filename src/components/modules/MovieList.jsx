import styled from "styled-components";

const MovieList = ({ data }) => {
  return (
    <List>
      {data.map(({ link, title, image }, index) => {
        return (
          <a href={link} key={link} target="_blank" rel="noreferrer">
            <Item>
              <Thumbnail
                src={
                  image ||
                  "https://www.bpcf.or.kr/images/program/perform_nophoto.gif"
                }
              />
              <Title>
                <span>{title.replace(/(<([^>]+)>)/gi, "")}</span>
              </Title>
            </Item>
          </a>
        );
      })}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  padding: 10px;
  a {
    text-decoration: none;
    color: unset;
    color: #ddeaef;
  }
`;
const Item = styled.div`
  width: 150px;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
`;
const Title = styled.div`
  display: flex;
  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export default MovieList;
