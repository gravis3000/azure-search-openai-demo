import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "What was HKEX's revenue in 2022?", value: "What was HKEX's revenue in 2022?" },
    { text: "What was HKEX's EBITDA in 2021?", value: "What was HKEX's EBITDA in 2021?"},
    { text: "When did HKEX announce its 2022 final results?", value: "When did HKEX announce its 2022 final results?"}
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
