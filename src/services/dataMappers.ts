import type { ForecastListItem, DailySummary } from "@/types/weatherTypes";

export const groupByLocalDate = (
  items: ForecastListItem[]
): Record<string, ForecastListItem[]> =>
  items.reduce((acc, item) => {
    const localDate = new Date(item.dt * 1000).toLocaleDateString(undefined, {
      timeZone: "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    if (!acc[localDate]) {
      acc[localDate] = [];
    }
    acc[localDate].push(item);
    return acc;
  }, {} as Record<string, ForecastListItem[]>);

export const getDailySummaries = (
  groupedItems: Record<string, ForecastListItem[]>
): DailySummary[] => {
  const entries = Object.entries(groupedItems);
  // Sort the entries by date
  const sortedEntries = entries.sort(([dateA], [dateB]) => {
    const dateAObj = new Date(dateA);
    const dateBObj = new Date(dateB);
    return dateAObj.getTime() - dateBObj.getTime();
  });

  // extract first 5 entries
  const firstFiveEntries = sortedEntries.slice(0, 5);

  const dailySummaries: DailySummary[] = [];
  for (const [date, items] of firstFiveEntries) {
    // get all temps for the day
    const temps = items.map((item) => item.main.temp);
    // get min and max temps
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);

    // get HiTemp and icon
    const hiTempItem = items.find((item) => item.main.temp === maxTemp);

    const icon = hiTempItem?.weather[0].icon || "01d"; // default to clear sky icon if not found
    const rawDescription = hiTempItem?.weather[0].description || "Clear sky"; // default to clear sky if not found
    const description =
      rawDescription.charAt(0).toUpperCase() + rawDescription.slice(1); // Capitalize the first letter

    const dayLabel = new Date(date).toLocaleDateString(undefined, {
      weekday: "short",
    });
    const formattedDate = new Date(date).toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    dailySummaries.push({
      date,
      dayLabel,
      minTemp,
      maxTemp,
      icon,
      formattedDate,
      description,
    });
  }

  return dailySummaries;
};
