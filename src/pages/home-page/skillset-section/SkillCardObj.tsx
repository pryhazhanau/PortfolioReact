export type SkillCardObj = {
    id: number
    title: string;
    body: string
    grade: "novice" | "intermediate" | "proficient" | "advanced" | "expert"
    percent: number
}