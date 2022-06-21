import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';


export const Text = styled.span`

  font-size: 18px;
  color: #636363;
  background-color: #ffffff;
  border: 2px solid #ABABAB;
  border-radius: 7px;
  padding: 2px;
`
export const Breadcrumb = styled(Link)`
  font-size: 18px;
  color: #636363;
  background-color: #ffffff;
  text-decoration:none;
  border: 2px solid #ABABAB;
  border-radius: 7px;
  padding: 2px;
  margin-right: 10px;
`
export const Arrow = styled.span`
display:inline-block;
 width: 0;
 height: 0;
 border-top: 5px solid transparent;
 border-left: 8px solid rgb(43, 135, 171);
 border-bottom: 5px solid transparent;
  margin-left:8px;
  margin-right:15px;
`

export const Breadcrumbs = ({ links }) => {
  return (
    links.map((link, index) => {
      if (index < links.length - 1) {
        return (
          <>
            <Breadcrumb to={link.to}>
              {index == 0 ?
                <HomeTwoToneIcon fontSize="middle" /> : false}
              {link.label}
              <Arrow />
            </Breadcrumb>

          </>
        )
      }
      return (
        <Text>
          {link.label}
          <Arrow />
        </Text>
      )
    })
  )
}
