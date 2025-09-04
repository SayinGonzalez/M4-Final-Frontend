import { useEffect } from "react";
import { usePetContext } from "../../../hooks/useContexts";
import MagicCard from "../../atoms/MagicCard";
import PetCard from "../../molecules/PetCard";
import SearchSidebar from "../../organisms/SearchSideBar";

const Adoptions = () => {

	const { petsAdoptions, loadPetsByCategory } = usePetContext();
	
	useEffect(() => {
		loadPetsByCategory("adoption"); // categoría correspondiente
  }, [loadPetsByCategory]);
	console.log('pets Adoptions ➜ ', petsAdoptions)
	
	return (
		<section className="flex-1 p-16 z-0">
			<SearchSidebar/>
			<div className="relative z-0 flex flex-wrap gap-6">
				{petsAdoptions && petsAdoptions.map((pet) => (
					<div
						key={pet._id}
						className="w-64 h-80"
					>
						<MagicCard
							radiusMain={200}
							radiusHalo={100}
						>
							<PetCard
								origen='adoptions'
								pet={pet}
							/>
						</MagicCard>
					</div>
				))}
			</div>
		</section>
	)

}
export default Adoptions