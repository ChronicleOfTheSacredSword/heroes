export interface HerosServicePort {
    getHerosById(id: number): Promise<HerosServicePort>;
}
