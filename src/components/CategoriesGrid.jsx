import { CategoryCounter, CategoryItem } from "./CategoryItem";
import styled from "@emotion/styled";
import { LinkBase } from "../customatizations/LinkBase";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`

export function CategoriesGrid({ categories }) {
  return (
    <Grid>
      {categories?.map((category) => (
        <LinkBase to="/catalog">
          <CategoryItem>
            {category.name}
            <CategoryCounter>
              {category.childCount}
            </CategoryCounter>
          </CategoryItem>
        </LinkBase>
      ))}
    </Grid>
  )
}
