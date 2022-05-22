
import React, {memo} from "react";
import propTypes from 'prop-types'
import { Flex } from "../../../components";
import Card from "./card";



function Board({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data

    return(
        <Flex>
            <Flex>
                <Card value = {cases} label='total de casos' color='#5d78ff'/>
            </Flex>
            <Flex>
                <Card value = {todayDeaths} label='Òbitos hoje' color='#F78829'/>
            </Flex>
            <Flex>
                <Card value = {todayCases} label='Casos de hoje' color='#00f'/>
            </Flex>
            <Flex>
                <Card value = {deaths} label='total de mortos' color='#E95078'/>
            </Flex>
            <Flex>
                <Card value = {recovered} label='total de recuperados' color='#67C887'/>
            </Flex>
        </Flex>
    )
}

export default memo(Board)