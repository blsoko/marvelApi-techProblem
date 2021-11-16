import { render, cleanup, screen, waitFor } from '@testing-library/react';
import { characterService } from "./application/services/character.service";

import App from './App';
jest.mock('./application/services/character.service');


afterEach(cleanup)
const data1 = {
		"id": 1011162,
		"name": "Tenebrous",
		"description": "Tenebrous has existed in this universe since its infancy, and was imprisoned in the planet Kyln after a battle with Galactus.",
		"modified": "1969-12-31T19:00:00-0500",
		"thumbnail": {
			"path": "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4c002f3b92276",
			"extension": "jpg"
		},
		"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011162",
		"comics": {
			"available": 2,
			"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011162/comics",
			"items": [
				{
					"resourceURI": "http://gateway.marvel.com/v1/public/comics/4315",
					"name": "Annihilation: Silver Surfer (2006) #3"
				},
				{
					"resourceURI": "http://gateway.marvel.com/v1/public/comics/4470",
					"name": "Annihilation: Silver Surfer (2006) #4"
				}
			],
			"returned": 2
		},
		"series": {
			"available": 1,
			"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011162/series",
			"items": [
				{
					"resourceURI": "http://gateway.marvel.com/v1/public/series/1078",
					"name": "Annihilation: Silver Surfer (2006)"
				}
			],
			"returned": 1
		},
		"stories": {
			"available": 2,
			"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011162/stories",
			"items": [
				{
					"resourceURI": "http://gateway.marvel.com/v1/public/stories/5929",
					"name": "Annihilation: Silver Surfer (2006) #3",
					"type": "cover"
				},
				{
					"resourceURI": "http://gateway.marvel.com/v1/public/stories/5931",
					"name": "Annihilation: Silver Surfer (2006) #4",
					"type": "cover"
				}
			],
			"returned": 2
		},
		"events": {
			"available": 1,
			"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011162/events",
			"items": [
				{
					"resourceURI": "http://gateway.marvel.com/v1/public/events/229",
					"name": "Annihilation"
				}
			],
			"returned": 1
		},
		"urls": [
			{
				"type": "detail",
				"url": "http://marvel.com/characters/2309/tenebrous?utm_campaign=apiRef&utm_source=4106c0bc8ac32d760c0c19187fc3859f"
			},
			{
				"type": "wiki",
				"url": "http://marvel.com/universe/Tenebrous?utm_campaign=apiRef&utm_source=4106c0bc8ac32d760c0c19187fc3859f"
			},
			{
				"type": "comiclink",
				"url": "http://marvel.com/comics/characters/1011162/tenebrous?utm_campaign=apiRef&utm_source=4106c0bc8ac32d760c0c19187fc3859f"
			}
		]
	}

const data2 = {
		"id": 1011355,
		"name": "Captain Midlands",
		"description": "",
		"modified": "1969-12-31T19:00:00-0500",
		"thumbnail": {
			"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
			"extension": "jpg"
		},
		"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011355",
		"comics": {
			"available": 0,
			"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011355/comics",
			"items": [],
			"returned": 0
		},
		"series": {
			"available": 0,
			"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011355/series",
			"items": [],
			"returned": 0
		},
		"stories": {
			"available": 0,
			"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011355/stories",
			"items": [],
			"returned": 0
		},
		"events": {
			"available": 0,
			"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011355/events",
			"items": [],
			"returned": 0
		},
		"urls": [
			{
				"type": "detail",
				"url": "http://marvel.com/characters/386/captain_midlands?utm_campaign=apiRef&utm_source=4106c0bc8ac32d760c0c19187fc3859f"
			},
			{
				"type": "wiki",
				"url": "http://marvel.com/universe/Captain_Midlands?utm_campaign=apiRef&utm_source=4106c0bc8ac32d760c0c19187fc3859f"
			},
			{
				"type": "comiclink",
				"url": "http://marvel.com/comics/characters/1011355/captain_midlands?utm_campaign=apiRef&utm_source=4106c0bc8ac32d760c0c19187fc3859f"
			}
		]
}
test('renders Characters title and character list ', () => {
  characterService.getAllByOffsetAndLimit.mockResolvedValue({total: 2, results: [data1, data2]});
  const {container} = render(<App />);
  const linkElement = screen.getByText(/Characters/i);
  expect(linkElement).toBeInTheDocument();
  waitFor(()=> expect(container.getElementsByClassName("character")).toHaveLength(2))
});

