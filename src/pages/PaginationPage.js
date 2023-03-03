import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const TOATAL_PAGES = 10;

const fetchData = async (page) => {
	const response = await fetch(
		`https://randomuser.me/api/?page=${page}&results=10&seed=abc`
	);
	return await response.json();
};

const randomNumber = () => {
	return Math.random() * 100000000;
};

export default function PaginationPage() {
	const [page, setPage] = useState(1);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		(async () => {
			const users = await fetchData(page);
			setUsers(users.results);
		})();
	}, [page]);

	const handleClick = (i) => {
		setPage(i);
	};

	const handlePrev = () => {
		let prevPage = page - 1;
		if (prevPage < 1) setPage(TOATAL_PAGES);
		else setPage(prevPage);
	};

	const handleNext = () => {
		let nextPage = page + 1;
		if (nextPage > TOATAL_PAGES) setPage(1);
		else setPage(nextPage);
	};

	const pagesNavLinks = [];
	for (let i = 1; i <= TOATAL_PAGES; i++) {
		pagesNavLinks.push(
			<Button
				className={page === i ? "bg-blue-900" : " "}
				key={i}
				onClick={() => handleClick(i)}
			>
				{i}
			</Button>
		);
	}

	const renderedUsers = users.map((user) => {
		const userInfo = {
			name: `${user.name.first} ${user.name.last}`,
			src: `${user.picture.medium}`,
		};
		return <Card user={userInfo} key={randomNumber()} />;
	});

	return (
		<div className="flex flex-col items-center">
			<div className="text-black text-5xl font-medium mb-3">Paginaton</div>
			<div className="flex w-20 h-1.5 rounded bg-cyan-600 mb-14"></div>
			<div className="grid grid-cols-4 gap-x-5 gap-y-20 mb-20">
				{renderedUsers}
			</div>
			<div className="mb-20 flex gap-x-5">
				<Button onClick={handlePrev} className="bg-white text-black">
					Prev
				</Button>
				{pagesNavLinks}
				<Button onClick={handleNext} className="bg-white text-black">
					Next
				</Button>
			</div>
		</div>
	);
}
