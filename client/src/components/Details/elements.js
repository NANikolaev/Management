import styled from "styled-components";
import { ArticleContainer, Heading, Span, Paragraph, Button } from "../common";

export const StyledArticle = styled(ArticleContainer)`

`
export const StyledHeading = styled(Heading)`
 color: ${({ theme }) => theme.colors.prime};
 text-transform: uppercase;
`
export const StyledSpan = styled(Span)`

`
export const StyledParagraph = styled(Paragraph)`
 text-shadow: ${({ theme }) => theme.shadows.text};
 max-width: 380px;
`
export const StyledList = styled.ul`
display: flex;
justify-content: center;
margin-top: 20px;
gap: 50px;
`
export const StyledListItem = styled.li`
`
export const StyledUpdateButton = styled(Button)`
 color: ${({ theme }) => theme.colors.orange};
 background: ${({ theme }) => theme.colors.backgroundSec};
 &:hover{
    background: ${({ theme }) => theme.colors.tertiary};
 }
`
export const StyledDeleteButton = styled(Button)`
 color: ${({ theme }) => theme.colors.red};
 background: ${({ theme }) => theme.colors.backgroundSec};
 &:hover{
    background: ${({ theme }) => theme.colors.tertiary};
 }
`