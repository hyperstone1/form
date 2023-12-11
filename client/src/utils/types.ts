export interface FoundedItem {
  email: string;
  number: number | null;
}
export interface ResultListProps {
  loading: boolean;
  founded: FoundedItem[];
}
export interface FormProps {
  number: string;
  numberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  submitForm: () => Promise<void>;
}
