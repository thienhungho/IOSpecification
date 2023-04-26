// HW TODO: Add combine any type...
export interface InformationObjectType {
    key: string,
    // type: InformationTypeObjectType[], // Comment to prove other questions..
    display_name: any,
    keep_current_status: KeepCurrentStatusActionOfInformationObjectType,
    change?: ChangeActionOfInformationObjectType,
}

export interface InitialInformationObjectType extends InformationObjectType {

}

export interface PreviousInformationObjectType extends InformationObjectType {

}

export interface TimeUnitObjectType extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: {
        based_substance_key: SubstanceObjectType['key'],
        height: number,
        // Drop in air many times, then get avg.
        // Many planets do not rotate around their axis.
    }
}

export interface SecondTimeUnitObjectType extends TimeUnitObjectType {

}

export interface InformationTypeObjectType extends InformationObjectType {

}

export interface InformationObjectCollectionType extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: {
        information_object_type: InformationObjectType,
        // Default: 1
        total?: number,
    }
}

export interface StepObjectType<
    InitialMultipleInformationCollectionConst,
    MultipleInformationAfterActivateCollectionConst,
    PreviousMultipleInformationCollectionConst,
> extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: {
        initial_multiple_information_const: InitialMultipleInformationCollectionConst,
        multiple_information_after_activate_const: MultipleInformationAfterActivateCollectionConst,
        previous_multiple_information_const: PreviousMultipleInformationCollectionConst,
        available_need_to_changed_value_at_this_count_times?: InformationObjectCollectionType[],
        average_acceleration?: number,
        average_speed?: number,
        information_during_activating?: {
            information_object_collection_type: InformationObjectCollectionType[],
            change_times: number,
            average_acceleration: number,
            average_speed: number,
        }[],
        percent_when_compare_with_second_time_unit_for_period_of_time_per_count_of_change_times?: PeriodOfTimeInformationObjectType['period_of_time'],
        period_of_time_per_count_of_change_times?: PeriodOfTimeInformationObjectType['percent_when_compare_with_second_time_unit_for_period_of_time'],
    }
}

export interface LogicObjectType<
    InitialMultipleInformationCollectionConst,
    MultipleInformationAfterActivateCollectionConst,
    PreviousMultipleInformationCollectionConst,
> extends StepObjectType<
    InitialMultipleInformationCollectionConst,
    MultipleInformationAfterActivateCollectionConst,
    PreviousMultipleInformationCollectionConst
> {

}

export interface ActionObjectType extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: {
        // We can call this is preparatory logic, it is not required...
        action: StepObjectType<
            InformationObjectCollectionType[],
            InformationObjectCollectionType[],
            InformationObjectCollectionType[]
        >,
        logic_to_ignore?: LogicObjectType<
            InformationObjectCollectionType[],
            InformationObjectCollectionType[],
            InformationObjectCollectionType[]
        >,
        required_logic_to_active_critical_logic?: LogicObjectType<
            InformationObjectCollectionType[],
            InformationObjectCollectionType[],
            InformationObjectCollectionType[]
        >,
        critical_logic?: LogicObjectType<
            InformationObjectCollectionType[],
            InformationObjectCollectionType[],
            InformationObjectCollectionType[]
        >,
        percent_when_compare_with_second_time_unit_for_period_of_time_for_logic_have_been_activated?: PeriodOfTimeInformationObjectType['period_of_time'],
        period_of_time_for_logic_have_been_activated_after_a_period_of_time?: PeriodOfTimeInformationObjectType['percent_when_compare_with_second_time_unit_for_period_of_time'],
        required_logic_to_active_logic_have_been_activated_after_a_period_of_time?: LogicObjectType<
            InformationObjectCollectionType[],
            InformationObjectCollectionType[],
            InformationObjectCollectionType[]
        >,
        logic_have_been_activated_after_a_period_of_time?: LogicObjectType<
            InformationObjectCollectionType[],
            InformationObjectCollectionType[],
            InformationObjectCollectionType[]
        >,
    }
}

export interface PeriodOfTimeInformationObjectType extends InformationObjectType {
    period_of_time: number,
    percent_when_compare_with_second_time_unit_for_period_of_time: number,
}

export interface KeepCurrentStatusActionOfInformationObjectType {
    percent_when_compare_with_second_time_unit_for_period_of_time_per_count_of_change_times: PeriodOfTimeInformationObjectType['period_of_time'],
    period_of_time_per_count_of_change_times: PeriodOfTimeInformationObjectType['percent_when_compare_with_second_time_unit_for_period_of_time'],
    before_activating?: ActionObjectType,
    during_activating: ActionObjectType,
    after_activating?: ActionObjectType,
}

export interface ChangeActionOfInformationObjectType extends KeepCurrentStatusActionOfInformationObjectType {
    percent_when_compare_with_second_time_unit_for_period_of_time_per_count_of_change_times: PeriodOfTimeInformationObjectType['period_of_time'],
    period_of_time_per_count_of_change_times: PeriodOfTimeInformationObjectType['percent_when_compare_with_second_time_unit_for_period_of_time'],
    required_logic_to_can_begin_active: StepObjectType<
        InformationObjectCollectionType[],
        InformationObjectCollectionType[],
        InformationObjectCollectionType[]
    >,
    before_activating?: ActionObjectType,
    during_activating: ActionObjectType,
    after_activating?: ActionObjectType,
}

export interface SquareCubeObjectType extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: {
        based_substance_key: SubstanceObjectType['key'],
        height: number,
        width: number,
        volume: number, // Square Cube: h * w * w
    }
}

export interface WeightUnitObjectType extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: {
        based_substance_key: SubstanceObjectType['key'],
        height: number,
        width: number,
        volume: number, // Square Cube: h * w * w
    }
}

export interface DistanceUnitObjectType extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: {
        based_substance_key: SubstanceObjectType['key'],
        weight_unit_one: WeightUnitObjectType,
        weight_unit_two: WeightUnitObjectType,
        value_for_same_width_for_both_weight_unit_for_have_result: number,
        difference_height_between_two_weight_unit: number, // h1 - h2
    }
}

export interface SubstanceObjectType extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: {
        type: "solid" | "liquid" | "substance_in_air",
        weight_const: number,
        weight_unit: WeightUnitObjectType,
        WCEAP: number,
        percent_when_compare_with_second_time_unit_for_absorb_power: number,
        distance_unit: DistanceUnitObjectType,
        distance_for_absorb_power: number,
        time_result_for_absorb_power: number,
        absorb_power: number, // WCEAP (value effect from weight_const to absorb_power_by_weight_const, count by some times, at least 2 times (>2)) * d (distance) / t (time), 2 same things same substance, between a distance)
    }
}
