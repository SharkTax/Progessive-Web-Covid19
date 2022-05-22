import React, {memo} from "react";
import { Card, Button, Select, MenuItem } from "../../../components";
import COUNTRIES from "../../../commons/constants/countries";
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share


function Panel({ updateAt, onChange, data, country, getCoviddata }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data

   const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
        <ItemStyled>
         <div>{country.label}</div>
        </ItemStyled>
      </MenuItem>

    )

    const textCovid19 = `Pais: ${country} - recuperados${recovered}`
    const copyInfo= ()=>{
        navigator.clipboard.writeText(textCovid19)
    }
    const shareInfo=()=>{
        navigator.share({
            title:`Dados do covid 19 -${country}`,
            text: textCovid19,
        })
    }

    const renderShareButton = (
        <div>
            <Button onClick={shareInfo}>
                compartilhar
            </Button>
        </div>
    )

    const renderCopyButton=(
        <div>
            <Button onClick={copyInfo}>
                copiar
            </Button>
        </div>
    )

    return(
        <Card>
            <CardPanelContentStyled>
                <div>
                    Atualizado em {updateAt}
                </div>
                <div className="pt-2">
                    <Select onChange={onChange} value={country}>
                        {COUNTRIES.map(renderCountries)}
                    </Select>
                </div>
                {navigatorHasShare? renderShareButton: renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)