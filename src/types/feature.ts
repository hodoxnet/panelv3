export interface FeatureValue {
  id: string;
  name: string;
}

export interface FeatureGroup {
  id: string;
  name: string;
  isActive: boolean;
  values: FeatureValue[];
}

export interface FeatureGroupFormData {
  name: string;
  isActive: boolean;
}