import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {games && games.map((game) => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
