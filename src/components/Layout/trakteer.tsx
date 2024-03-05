import { Button } from "@ui/button";
export default function Trakteer() {
  return (
    <>
      <Button className="h-9 focus:outline-none dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
        <img
          className="rounded bg-white"
          width={22}
          height={22}
          referrerPolicy="no-referrer"
          src="https://trakteer-assets.sgp1.digitaloceanspaces.com/images/mix/trakteer-icon.png"
        />
      </Button>
    </>
  );
}
