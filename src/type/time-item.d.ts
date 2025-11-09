import EducationItem from "./education";
import WorkItem from "./work";

export type TimeItemType = { type: "education", value: EducationItem } | { type: "work", value: WorkItem };