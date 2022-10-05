import * as $protobuf from "protobufjs";
/** Properties of a ICRONFunctionCall. */
export interface IICRONFunctionCall {

    /** ICRONFunctionCall username */
    username?: (Uint8Array|null);

    /** ICRONFunctionCall ClientID */
    ClientID?: (number|null);

    /** ICRONFunctionCall serverinstanceid */
    serverinstanceid?: (number|null);

    /** ICRONFunctionCall requestId */
    requestId?: (number|Long|null);

    /** ICRONFunctionCall SessionDBID */
    SessionDBID?: (number|Long|null);

    /** ICRONFunctionCall ExecutionType */
    ExecutionType?: (number|null);

    /** ICRONFunctionCall ClientType */
    ClientType?: (number|null);

    /** ICRONFunctionCall scenarioId */
    scenarioId?: (number|null);

    /** ICRONFunctionCall function */
    "function"?: (Uint8Array|null);

    /** ICRONFunctionCall dataset */
    dataset?: (IProto_DataSet|null);

    /** ICRONFunctionCall description */
    description?: (Uint8Array|null);

    /** ICRONFunctionCall RequestCommandType */
    RequestCommandType?: (number|null);

    /** ICRONFunctionCall BinaryData */
    BinaryData?: (Uint8Array|null);

    /** ICRONFunctionCall ClientRequestID */
    ClientRequestID?: (number|null);

    /** ICRONFunctionCall ActionTag */
    ActionTag?: (Uint8Array|null);

    /** ICRONFunctionCall datasetrequest */
    datasetrequest?: (IProto_DataSetRequest|null);

    /** ICRONFunctionCall stringmap */
    stringmap?: (IProto_KeyStringMap|null);

    /** ICRONFunctionCall SessionCode */
    SessionCode?: (Uint8Array|null);

    /** ICRONFunctionCall ScenarioCode */
    ScenarioCode?: (Uint8Array|null);

    /** ICRONFunctionCall traceparent */
    traceparent?: (Uint8Array|null);

    /** ICRONFunctionCall Scenario */
    Scenario?: (IProto_Scenario|null);

    /** ICRONFunctionCall DataSetDBID */
    DataSetDBID?: (number|Long|null);

    /** ICRONFunctionCall ReleaseList */
    ReleaseList?: (IProto_Release_List|null);

    /** ICRONFunctionCall processreleasedata */
    processreleasedata?: (IProto_ProcessReleaseData|null);

    /** ICRONFunctionCall GUIContext */
    GUIContext?: (IProto_GUIContext|null);
}

/** Represents a ICRONFunctionCall. */
export class ICRONFunctionCall implements IICRONFunctionCall {

    /**
     * Constructs a new ICRONFunctionCall.
     * @param [properties] Properties to set
     */
    constructor(properties?: IICRONFunctionCall);

    /** ICRONFunctionCall username. */
    public username: Uint8Array;

    /** ICRONFunctionCall ClientID. */
    public ClientID: number;

    /** ICRONFunctionCall serverinstanceid. */
    public serverinstanceid: number;

    /** ICRONFunctionCall requestId. */
    public requestId: (number|Long);

    /** ICRONFunctionCall SessionDBID. */
    public SessionDBID: (number|Long);

    /** ICRONFunctionCall ExecutionType. */
    public ExecutionType: number;

    /** ICRONFunctionCall ClientType. */
    public ClientType: number;

    /** ICRONFunctionCall scenarioId. */
    public scenarioId: number;

    /** ICRONFunctionCall function. */
    public function: Uint8Array;

    /** ICRONFunctionCall dataset. */
    public dataset?: (IProto_DataSet|null);

    /** ICRONFunctionCall description. */
    public description: Uint8Array;

    /** ICRONFunctionCall RequestCommandType. */
    public RequestCommandType: number;

    /** ICRONFunctionCall BinaryData. */
    public BinaryData: Uint8Array;

    /** ICRONFunctionCall ClientRequestID. */
    public ClientRequestID: number;

    /** ICRONFunctionCall ActionTag. */
    public ActionTag: Uint8Array;

    /** ICRONFunctionCall datasetrequest. */
    public datasetrequest?: (IProto_DataSetRequest|null);

    /** ICRONFunctionCall stringmap. */
    public stringmap?: (IProto_KeyStringMap|null);

    /** ICRONFunctionCall SessionCode. */
    public SessionCode: Uint8Array;

    /** ICRONFunctionCall ScenarioCode. */
    public ScenarioCode: Uint8Array;

    /** ICRONFunctionCall traceparent. */
    public traceparent: Uint8Array;

    /** ICRONFunctionCall Scenario. */
    public Scenario?: (IProto_Scenario|null);

    /** ICRONFunctionCall DataSetDBID. */
    public DataSetDBID: (number|Long);

    /** ICRONFunctionCall ReleaseList. */
    public ReleaseList?: (IProto_Release_List|null);

    /** ICRONFunctionCall processreleasedata. */
    public processreleasedata?: (IProto_ProcessReleaseData|null);

    /** ICRONFunctionCall GUIContext. */
    public GUIContext?: (IProto_GUIContext|null);

    /**
     * Creates a new ICRONFunctionCall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ICRONFunctionCall instance
     */
    public static create(properties?: IICRONFunctionCall): ICRONFunctionCall;

    /**
     * Encodes the specified ICRONFunctionCall message. Does not implicitly {@link ICRONFunctionCall.verify|verify} messages.
     * @param message ICRONFunctionCall message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IICRONFunctionCall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ICRONFunctionCall message, length delimited. Does not implicitly {@link ICRONFunctionCall.verify|verify} messages.
     * @param message ICRONFunctionCall message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IICRONFunctionCall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ICRONFunctionCall message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ICRONFunctionCall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ICRONFunctionCall;

    /**
     * Decodes a ICRONFunctionCall message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ICRONFunctionCall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ICRONFunctionCall;

    /**
     * Verifies a ICRONFunctionCall message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ICRONFunctionCall message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ICRONFunctionCall
     */
    public static fromObject(object: { [k: string]: any }): ICRONFunctionCall;

    /**
     * Creates a plain object from a ICRONFunctionCall message. Also converts values to other types if specified.
     * @param message ICRONFunctionCall
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ICRONFunctionCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ICRONFunctionCall to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUIContext. */
export interface IProto_GUIContext {

    /** Proto_GUIContext WindowIndex */
    WindowIndex?: (number|null);

    /** Proto_GUIContext WSName */
    WSName?: (Uint8Array|null);

    /** Proto_GUIContext PresetName */
    PresetName?: (Uint8Array|null);

    /** Proto_GUIContext GroupPresetName */
    GroupPresetName?: (Uint8Array|null);

    /** Proto_GUIContext GUIParameterObjectReferenceIDWithCN */
    GUIParameterObjectReferenceIDWithCN?: (IProto_ReferenceIDWithCN|null);
}

/** Represents a Proto_GUIContext. */
export class Proto_GUIContext implements IProto_GUIContext {

    /**
     * Constructs a new Proto_GUIContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUIContext);

    /** Proto_GUIContext WindowIndex. */
    public WindowIndex: number;

    /** Proto_GUIContext WSName. */
    public WSName: Uint8Array;

    /** Proto_GUIContext PresetName. */
    public PresetName: Uint8Array;

    /** Proto_GUIContext GroupPresetName. */
    public GroupPresetName: Uint8Array;

    /** Proto_GUIContext GUIParameterObjectReferenceIDWithCN. */
    public GUIParameterObjectReferenceIDWithCN?: (IProto_ReferenceIDWithCN|null);

    /**
     * Creates a new Proto_GUIContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUIContext instance
     */
    public static create(properties?: IProto_GUIContext): Proto_GUIContext;

    /**
     * Encodes the specified Proto_GUIContext message. Does not implicitly {@link Proto_GUIContext.verify|verify} messages.
     * @param message Proto_GUIContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUIContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUIContext message, length delimited. Does not implicitly {@link Proto_GUIContext.verify|verify} messages.
     * @param message Proto_GUIContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUIContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUIContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUIContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUIContext;

    /**
     * Decodes a Proto_GUIContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUIContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUIContext;

    /**
     * Verifies a Proto_GUIContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUIContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUIContext
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUIContext;

    /**
     * Creates a plain object from a Proto_GUIContext message. Also converts values to other types if specified.
     * @param message Proto_GUIContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUIContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUIContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ReferenceIDWithCN. */
export interface IProto_ReferenceIDWithCN {

    /** Proto_ReferenceIDWithCN ClassName */
    ClassName?: (Uint8Array|null);

    /** Proto_ReferenceIDWithCN ReferenceID */
    ReferenceID?: (number|Long|null);

    /** Proto_ReferenceIDWithCN DBID */
    DBID?: (number|Long|null);
}

/** Represents a Proto_ReferenceIDWithCN. */
export class Proto_ReferenceIDWithCN implements IProto_ReferenceIDWithCN {

    /**
     * Constructs a new Proto_ReferenceIDWithCN.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ReferenceIDWithCN);

    /** Proto_ReferenceIDWithCN ClassName. */
    public ClassName: Uint8Array;

    /** Proto_ReferenceIDWithCN ReferenceID. */
    public ReferenceID: (number|Long);

    /** Proto_ReferenceIDWithCN DBID. */
    public DBID: (number|Long);

    /**
     * Creates a new Proto_ReferenceIDWithCN instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ReferenceIDWithCN instance
     */
    public static create(properties?: IProto_ReferenceIDWithCN): Proto_ReferenceIDWithCN;

    /**
     * Encodes the specified Proto_ReferenceIDWithCN message. Does not implicitly {@link Proto_ReferenceIDWithCN.verify|verify} messages.
     * @param message Proto_ReferenceIDWithCN message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ReferenceIDWithCN, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ReferenceIDWithCN message, length delimited. Does not implicitly {@link Proto_ReferenceIDWithCN.verify|verify} messages.
     * @param message Proto_ReferenceIDWithCN message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ReferenceIDWithCN, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ReferenceIDWithCN message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ReferenceIDWithCN
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ReferenceIDWithCN;

    /**
     * Decodes a Proto_ReferenceIDWithCN message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ReferenceIDWithCN
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ReferenceIDWithCN;

    /**
     * Verifies a Proto_ReferenceIDWithCN message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ReferenceIDWithCN message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ReferenceIDWithCN
     */
    public static fromObject(object: { [k: string]: any }): Proto_ReferenceIDWithCN;

    /**
     * Creates a plain object from a Proto_ReferenceIDWithCN message. Also converts values to other types if specified.
     * @param message Proto_ReferenceIDWithCN
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ReferenceIDWithCN, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ReferenceIDWithCN to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ProductTour. */
export interface IProto_ProductTour {

    /** Proto_ProductTour ProductTourName */
    ProductTourName?: (Uint8Array|null);

    /** Proto_ProductTour ContextCode */
    ContextCode?: (Uint8Array|null);

    /** Proto_ProductTour TourActivationType */
    TourActivationType?: (number|null);

    /** Proto_ProductTour TourDisplayType */
    TourDisplayType?: (number|null);

    /** Proto_ProductTour ProductTourLastStepIndex */
    ProductTourLastStepIndex?: (number|null);

    /** Proto_ProductTour ProductTourState */
    ProductTourState?: (number|null);

    /** Proto_ProductTour ProductTourStep */
    ProductTourStep?: (IProto_ProductTourStep[]|null);
}

/** Represents a Proto_ProductTour. */
export class Proto_ProductTour implements IProto_ProductTour {

    /**
     * Constructs a new Proto_ProductTour.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ProductTour);

    /** Proto_ProductTour ProductTourName. */
    public ProductTourName: Uint8Array;

    /** Proto_ProductTour ContextCode. */
    public ContextCode: Uint8Array;

    /** Proto_ProductTour TourActivationType. */
    public TourActivationType: number;

    /** Proto_ProductTour TourDisplayType. */
    public TourDisplayType: number;

    /** Proto_ProductTour ProductTourLastStepIndex. */
    public ProductTourLastStepIndex: number;

    /** Proto_ProductTour ProductTourState. */
    public ProductTourState: number;

    /** Proto_ProductTour ProductTourStep. */
    public ProductTourStep: IProto_ProductTourStep[];

    /**
     * Creates a new Proto_ProductTour instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ProductTour instance
     */
    public static create(properties?: IProto_ProductTour): Proto_ProductTour;

    /**
     * Encodes the specified Proto_ProductTour message. Does not implicitly {@link Proto_ProductTour.verify|verify} messages.
     * @param message Proto_ProductTour message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ProductTour, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ProductTour message, length delimited. Does not implicitly {@link Proto_ProductTour.verify|verify} messages.
     * @param message Proto_ProductTour message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ProductTour, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ProductTour message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ProductTour
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ProductTour;

    /**
     * Decodes a Proto_ProductTour message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ProductTour
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ProductTour;

    /**
     * Verifies a Proto_ProductTour message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ProductTour message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ProductTour
     */
    public static fromObject(object: { [k: string]: any }): Proto_ProductTour;

    /**
     * Creates a plain object from a Proto_ProductTour message. Also converts values to other types if specified.
     * @param message Proto_ProductTour
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ProductTour, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ProductTour to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ProductTourStep. */
export interface IProto_ProductTourStep {

    /** Proto_ProductTourStep ProductTourStepIndex */
    ProductTourStepIndex?: (number|null);

    /** Proto_ProductTourStep GUIElementCode */
    GUIElementCode?: (Uint8Array|null);

    /** Proto_ProductTourStep HelpURL */
    HelpURL?: (Uint8Array|null);
}

/** Represents a Proto_ProductTourStep. */
export class Proto_ProductTourStep implements IProto_ProductTourStep {

    /**
     * Constructs a new Proto_ProductTourStep.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ProductTourStep);

    /** Proto_ProductTourStep ProductTourStepIndex. */
    public ProductTourStepIndex: number;

    /** Proto_ProductTourStep GUIElementCode. */
    public GUIElementCode: Uint8Array;

    /** Proto_ProductTourStep HelpURL. */
    public HelpURL: Uint8Array;

    /**
     * Creates a new Proto_ProductTourStep instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ProductTourStep instance
     */
    public static create(properties?: IProto_ProductTourStep): Proto_ProductTourStep;

    /**
     * Encodes the specified Proto_ProductTourStep message. Does not implicitly {@link Proto_ProductTourStep.verify|verify} messages.
     * @param message Proto_ProductTourStep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ProductTourStep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ProductTourStep message, length delimited. Does not implicitly {@link Proto_ProductTourStep.verify|verify} messages.
     * @param message Proto_ProductTourStep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ProductTourStep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ProductTourStep message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ProductTourStep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ProductTourStep;

    /**
     * Decodes a Proto_ProductTourStep message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ProductTourStep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ProductTourStep;

    /**
     * Verifies a Proto_ProductTourStep message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ProductTourStep message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ProductTourStep
     */
    public static fromObject(object: { [k: string]: any }): Proto_ProductTourStep;

    /**
     * Creates a plain object from a Proto_ProductTourStep message. Also converts values to other types if specified.
     * @param message Proto_ProductTourStep
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ProductTourStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ProductTourStep to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_CyclicSessionGivenCT. */
export interface IProto_CyclicSessionGivenCT {

    /** Proto_CyclicSessionGivenCT ProcessCode */
    ProcessCode?: (Uint8Array|null);

    /** Proto_CyclicSessionGivenCT CalendarTime */
    CalendarTime?: (number|Long|null);
}

/** Represents a Proto_CyclicSessionGivenCT. */
export class Proto_CyclicSessionGivenCT implements IProto_CyclicSessionGivenCT {

    /**
     * Constructs a new Proto_CyclicSessionGivenCT.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_CyclicSessionGivenCT);

    /** Proto_CyclicSessionGivenCT ProcessCode. */
    public ProcessCode: Uint8Array;

    /** Proto_CyclicSessionGivenCT CalendarTime. */
    public CalendarTime: (number|Long);

    /**
     * Creates a new Proto_CyclicSessionGivenCT instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_CyclicSessionGivenCT instance
     */
    public static create(properties?: IProto_CyclicSessionGivenCT): Proto_CyclicSessionGivenCT;

    /**
     * Encodes the specified Proto_CyclicSessionGivenCT message. Does not implicitly {@link Proto_CyclicSessionGivenCT.verify|verify} messages.
     * @param message Proto_CyclicSessionGivenCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_CyclicSessionGivenCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_CyclicSessionGivenCT message, length delimited. Does not implicitly {@link Proto_CyclicSessionGivenCT.verify|verify} messages.
     * @param message Proto_CyclicSessionGivenCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_CyclicSessionGivenCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_CyclicSessionGivenCT message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_CyclicSessionGivenCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_CyclicSessionGivenCT;

    /**
     * Decodes a Proto_CyclicSessionGivenCT message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_CyclicSessionGivenCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_CyclicSessionGivenCT;

    /**
     * Verifies a Proto_CyclicSessionGivenCT message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_CyclicSessionGivenCT message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_CyclicSessionGivenCT
     */
    public static fromObject(object: { [k: string]: any }): Proto_CyclicSessionGivenCT;

    /**
     * Creates a plain object from a Proto_CyclicSessionGivenCT message. Also converts values to other types if specified.
     * @param message Proto_CyclicSessionGivenCT
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_CyclicSessionGivenCT, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_CyclicSessionGivenCT to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Session. */
export interface IProto_Session {

    /** Proto_Session ContinuousSessionProcessCode */
    ContinuousSessionProcessCode?: (Uint8Array|null);

    /** Proto_Session CyclicSessionGivenCT */
    CyclicSessionGivenCT?: (IProto_CyclicSessionGivenCT|null);

    /** Proto_Session CyclicSessionCode */
    CyclicSessionCode?: (Uint8Array|null);

    /** Proto_Session LatestCyclicSessionProcessCode */
    LatestCyclicSessionProcessCode?: (Uint8Array|null);
}

/** Represents a Proto_Session. */
export class Proto_Session implements IProto_Session {

    /**
     * Constructs a new Proto_Session.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Session);

    /** Proto_Session ContinuousSessionProcessCode. */
    public ContinuousSessionProcessCode?: (Uint8Array|null);

    /** Proto_Session CyclicSessionGivenCT. */
    public CyclicSessionGivenCT?: (IProto_CyclicSessionGivenCT|null);

    /** Proto_Session CyclicSessionCode. */
    public CyclicSessionCode?: (Uint8Array|null);

    /** Proto_Session LatestCyclicSessionProcessCode. */
    public LatestCyclicSessionProcessCode?: (Uint8Array|null);

    /** Proto_Session value. */
    public value?: ("ContinuousSessionProcessCode"|"CyclicSessionGivenCT"|"CyclicSessionCode"|"LatestCyclicSessionProcessCode");

    /**
     * Creates a new Proto_Session instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Session instance
     */
    public static create(properties?: IProto_Session): Proto_Session;

    /**
     * Encodes the specified Proto_Session message. Does not implicitly {@link Proto_Session.verify|verify} messages.
     * @param message Proto_Session message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Session, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Session message, length delimited. Does not implicitly {@link Proto_Session.verify|verify} messages.
     * @param message Proto_Session message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Session, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Session message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Session;

    /**
     * Decodes a Proto_Session message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Session;

    /**
     * Verifies a Proto_Session message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Session message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Session
     */
    public static fromObject(object: { [k: string]: any }): Proto_Session;

    /**
     * Creates a plain object from a Proto_Session message. Also converts values to other types if specified.
     * @param message Proto_Session
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Session, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Session to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_WhatifScenario. */
export interface IProto_WhatifScenario {

    /** Proto_WhatifScenario ScenarioCode */
    ScenarioCode?: (Uint8Array|null);

    /** Proto_WhatifScenario Session */
    Session?: (IProto_Session|null);
}

/** Represents a Proto_WhatifScenario. */
export class Proto_WhatifScenario implements IProto_WhatifScenario {

    /**
     * Constructs a new Proto_WhatifScenario.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_WhatifScenario);

    /** Proto_WhatifScenario ScenarioCode. */
    public ScenarioCode: Uint8Array;

    /** Proto_WhatifScenario Session. */
    public Session?: (IProto_Session|null);

    /**
     * Creates a new Proto_WhatifScenario instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_WhatifScenario instance
     */
    public static create(properties?: IProto_WhatifScenario): Proto_WhatifScenario;

    /**
     * Encodes the specified Proto_WhatifScenario message. Does not implicitly {@link Proto_WhatifScenario.verify|verify} messages.
     * @param message Proto_WhatifScenario message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_WhatifScenario, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_WhatifScenario message, length delimited. Does not implicitly {@link Proto_WhatifScenario.verify|verify} messages.
     * @param message Proto_WhatifScenario message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_WhatifScenario, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_WhatifScenario message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_WhatifScenario
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_WhatifScenario;

    /**
     * Decodes a Proto_WhatifScenario message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_WhatifScenario
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_WhatifScenario;

    /**
     * Verifies a Proto_WhatifScenario message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_WhatifScenario message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_WhatifScenario
     */
    public static fromObject(object: { [k: string]: any }): Proto_WhatifScenario;

    /**
     * Creates a plain object from a Proto_WhatifScenario message. Also converts values to other types if specified.
     * @param message Proto_WhatifScenario
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_WhatifScenario, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_WhatifScenario to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ScenarioInfo. */
export interface IProto_ScenarioInfo {

    /** Proto_ScenarioInfo ScenarioID */
    ScenarioID?: (number|null);

    /** Proto_ScenarioInfo ScenarioType */
    ScenarioType?: (number|null);

    /** Proto_ScenarioInfo ProcessType */
    ProcessType?: (number|null);

    /** Proto_ScenarioInfo ScenarioCode */
    ScenarioCode?: (Uint8Array|null);

    /** Proto_ScenarioInfo SessionCode */
    SessionCode?: (Uint8Array|null);

    /** Proto_ScenarioInfo ProcessCode */
    ProcessCode?: (Uint8Array|null);

    /** Proto_ScenarioInfo ScenarioDBID */
    ScenarioDBID?: (number|Long|null);

    /** Proto_ScenarioInfo SessionDBID */
    SessionDBID?: (number|Long|null);

    /** Proto_ScenarioInfo CanEditOnScenario */
    CanEditOnScenario?: (boolean|null);
}

/** Represents a Proto_ScenarioInfo. */
export class Proto_ScenarioInfo implements IProto_ScenarioInfo {

    /**
     * Constructs a new Proto_ScenarioInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ScenarioInfo);

    /** Proto_ScenarioInfo ScenarioID. */
    public ScenarioID: number;

    /** Proto_ScenarioInfo ScenarioType. */
    public ScenarioType: number;

    /** Proto_ScenarioInfo ProcessType. */
    public ProcessType: number;

    /** Proto_ScenarioInfo ScenarioCode. */
    public ScenarioCode: Uint8Array;

    /** Proto_ScenarioInfo SessionCode. */
    public SessionCode: Uint8Array;

    /** Proto_ScenarioInfo ProcessCode. */
    public ProcessCode: Uint8Array;

    /** Proto_ScenarioInfo ScenarioDBID. */
    public ScenarioDBID: (number|Long);

    /** Proto_ScenarioInfo SessionDBID. */
    public SessionDBID: (number|Long);

    /** Proto_ScenarioInfo CanEditOnScenario. */
    public CanEditOnScenario: boolean;

    /**
     * Creates a new Proto_ScenarioInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ScenarioInfo instance
     */
    public static create(properties?: IProto_ScenarioInfo): Proto_ScenarioInfo;

    /**
     * Encodes the specified Proto_ScenarioInfo message. Does not implicitly {@link Proto_ScenarioInfo.verify|verify} messages.
     * @param message Proto_ScenarioInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ScenarioInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ScenarioInfo message, length delimited. Does not implicitly {@link Proto_ScenarioInfo.verify|verify} messages.
     * @param message Proto_ScenarioInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ScenarioInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ScenarioInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ScenarioInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ScenarioInfo;

    /**
     * Decodes a Proto_ScenarioInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ScenarioInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ScenarioInfo;

    /**
     * Verifies a Proto_ScenarioInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ScenarioInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ScenarioInfo
     */
    public static fromObject(object: { [k: string]: any }): Proto_ScenarioInfo;

    /**
     * Creates a plain object from a Proto_ScenarioInfo message. Also converts values to other types if specified.
     * @param message Proto_ScenarioInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ScenarioInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ScenarioInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Scenario. */
export interface IProto_Scenario {

    /** Proto_Scenario ScenarioID */
    ScenarioID?: (number|null);

    /** Proto_Scenario SessionScenario */
    SessionScenario?: (IProto_Session|null);

    /** Proto_Scenario UserScenario */
    UserScenario?: (IProto_Session|null);

    /** Proto_Scenario LastEditableScenario */
    LastEditableScenario?: (IProto_Session|null);

    /** Proto_Scenario WhatifScenario */
    WhatifScenario?: (IProto_WhatifScenario|null);

    /** Proto_Scenario ScenarioLocatorExpression */
    ScenarioLocatorExpression?: (Uint8Array|null);
}

/** Represents a Proto_Scenario. */
export class Proto_Scenario implements IProto_Scenario {

    /**
     * Constructs a new Proto_Scenario.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Scenario);

    /** Proto_Scenario ScenarioID. */
    public ScenarioID?: (number|null);

    /** Proto_Scenario SessionScenario. */
    public SessionScenario?: (IProto_Session|null);

    /** Proto_Scenario UserScenario. */
    public UserScenario?: (IProto_Session|null);

    /** Proto_Scenario LastEditableScenario. */
    public LastEditableScenario?: (IProto_Session|null);

    /** Proto_Scenario WhatifScenario. */
    public WhatifScenario?: (IProto_WhatifScenario|null);

    /** Proto_Scenario ScenarioLocatorExpression. */
    public ScenarioLocatorExpression?: (Uint8Array|null);

    /** Proto_Scenario value. */
    public value?: ("ScenarioID"|"SessionScenario"|"UserScenario"|"LastEditableScenario"|"WhatifScenario"|"ScenarioLocatorExpression");

    /**
     * Creates a new Proto_Scenario instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Scenario instance
     */
    public static create(properties?: IProto_Scenario): Proto_Scenario;

    /**
     * Encodes the specified Proto_Scenario message. Does not implicitly {@link Proto_Scenario.verify|verify} messages.
     * @param message Proto_Scenario message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Scenario, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Scenario message, length delimited. Does not implicitly {@link Proto_Scenario.verify|verify} messages.
     * @param message Proto_Scenario message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Scenario, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Scenario message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Scenario
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Scenario;

    /**
     * Decodes a Proto_Scenario message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Scenario
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Scenario;

    /**
     * Verifies a Proto_Scenario message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Scenario message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Scenario
     */
    public static fromObject(object: { [k: string]: any }): Proto_Scenario;

    /**
     * Creates a plain object from a Proto_Scenario message. Also converts values to other types if specified.
     * @param message Proto_Scenario
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Scenario, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Scenario to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Release_List. */
export interface IProto_Release_List {

    /** Proto_Release_List ProcessCode */
    ProcessCode?: (Uint8Array|null);

    /** Proto_Release_List Release */
    Release?: (IProto_Release[]|null);
}

/** Represents a Proto_Release_List. */
export class Proto_Release_List implements IProto_Release_List {

    /**
     * Constructs a new Proto_Release_List.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Release_List);

    /** Proto_Release_List ProcessCode. */
    public ProcessCode: Uint8Array;

    /** Proto_Release_List Release. */
    public Release: IProto_Release[];

    /**
     * Creates a new Proto_Release_List instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Release_List instance
     */
    public static create(properties?: IProto_Release_List): Proto_Release_List;

    /**
     * Encodes the specified Proto_Release_List message. Does not implicitly {@link Proto_Release_List.verify|verify} messages.
     * @param message Proto_Release_List message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Release_List, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Release_List message, length delimited. Does not implicitly {@link Proto_Release_List.verify|verify} messages.
     * @param message Proto_Release_List message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Release_List, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Release_List message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Release_List
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Release_List;

    /**
     * Decodes a Proto_Release_List message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Release_List
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Release_List;

    /**
     * Verifies a Proto_Release_List message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Release_List message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Release_List
     */
    public static fromObject(object: { [k: string]: any }): Proto_Release_List;

    /**
     * Creates a plain object from a Proto_Release_List message. Also converts values to other types if specified.
     * @param message Proto_Release_List
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Release_List, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Release_List to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Release. */
export interface IProto_Release {

    /** Proto_Release ReleaseReferenceID */
    ReleaseReferenceID?: (number|Long|null);

    /** Proto_Release ReleaseIndexFromLast */
    ReleaseIndexFromLast?: (number|null);

    /** Proto_Release ReleaseOfType */
    ReleaseOfType?: (number|Long|null);

    /** Proto_Release ReleaseCode */
    ReleaseCode?: (Uint8Array|null);

    /** Proto_Release ReleaseName */
    ReleaseName?: (Uint8Array|null);

    /** Proto_Release ReleaseLocatorExpression */
    ReleaseLocatorExpression?: (Uint8Array|null);
}

/** Represents a Proto_Release. */
export class Proto_Release implements IProto_Release {

    /**
     * Constructs a new Proto_Release.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Release);

    /** Proto_Release ReleaseReferenceID. */
    public ReleaseReferenceID?: (number|Long|null);

    /** Proto_Release ReleaseIndexFromLast. */
    public ReleaseIndexFromLast?: (number|null);

    /** Proto_Release ReleaseOfType. */
    public ReleaseOfType?: (number|Long|null);

    /** Proto_Release ReleaseCode. */
    public ReleaseCode?: (Uint8Array|null);

    /** Proto_Release ReleaseName. */
    public ReleaseName?: (Uint8Array|null);

    /** Proto_Release ReleaseLocatorExpression. */
    public ReleaseLocatorExpression?: (Uint8Array|null);

    /** Proto_Release value. */
    public value?: ("ReleaseReferenceID"|"ReleaseIndexFromLast"|"ReleaseOfType"|"ReleaseCode"|"ReleaseName"|"ReleaseLocatorExpression");

    /**
     * Creates a new Proto_Release instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Release instance
     */
    public static create(properties?: IProto_Release): Proto_Release;

    /**
     * Encodes the specified Proto_Release message. Does not implicitly {@link Proto_Release.verify|verify} messages.
     * @param message Proto_Release message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Release, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Release message, length delimited. Does not implicitly {@link Proto_Release.verify|verify} messages.
     * @param message Proto_Release message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Release, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Release message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Release
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Release;

    /**
     * Decodes a Proto_Release message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Release
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Release;

    /**
     * Verifies a Proto_Release message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Release message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Release
     */
    public static fromObject(object: { [k: string]: any }): Proto_Release;

    /**
     * Creates a plain object from a Proto_Release message. Also converts values to other types if specified.
     * @param message Proto_Release
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Release, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Release to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_FederatedServers. */
export interface IProto_FederatedServers {

    /** Proto_FederatedServers ICRONServer */
    ICRONServer?: (IProto_ICRONServer[]|null);
}

/** Represents a Proto_FederatedServers. */
export class Proto_FederatedServers implements IProto_FederatedServers {

    /**
     * Constructs a new Proto_FederatedServers.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_FederatedServers);

    /** Proto_FederatedServers ICRONServer. */
    public ICRONServer: IProto_ICRONServer[];

    /**
     * Creates a new Proto_FederatedServers instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_FederatedServers instance
     */
    public static create(properties?: IProto_FederatedServers): Proto_FederatedServers;

    /**
     * Encodes the specified Proto_FederatedServers message. Does not implicitly {@link Proto_FederatedServers.verify|verify} messages.
     * @param message Proto_FederatedServers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_FederatedServers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_FederatedServers message, length delimited. Does not implicitly {@link Proto_FederatedServers.verify|verify} messages.
     * @param message Proto_FederatedServers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_FederatedServers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_FederatedServers message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_FederatedServers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_FederatedServers;

    /**
     * Decodes a Proto_FederatedServers message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_FederatedServers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_FederatedServers;

    /**
     * Verifies a Proto_FederatedServers message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_FederatedServers message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_FederatedServers
     */
    public static fromObject(object: { [k: string]: any }): Proto_FederatedServers;

    /**
     * Creates a plain object from a Proto_FederatedServers message. Also converts values to other types if specified.
     * @param message Proto_FederatedServers
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_FederatedServers, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_FederatedServers to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ICRONServer. */
export interface IProto_ICRONServer {

    /** Proto_ICRONServer ServerCode */
    ServerCode?: (Uint8Array|null);

    /** Proto_ICRONServer ServerIP */
    ServerIP?: (Uint8Array|null);

    /** Proto_ICRONServer ServerPort */
    ServerPort?: (number|null);

    /** Proto_ICRONServer ServerAPIURL */
    ServerAPIURL?: (Uint8Array|null);
}

/** Represents a Proto_ICRONServer. */
export class Proto_ICRONServer implements IProto_ICRONServer {

    /**
     * Constructs a new Proto_ICRONServer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ICRONServer);

    /** Proto_ICRONServer ServerCode. */
    public ServerCode: Uint8Array;

    /** Proto_ICRONServer ServerIP. */
    public ServerIP: Uint8Array;

    /** Proto_ICRONServer ServerPort. */
    public ServerPort: number;

    /** Proto_ICRONServer ServerAPIURL. */
    public ServerAPIURL: Uint8Array;

    /**
     * Creates a new Proto_ICRONServer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ICRONServer instance
     */
    public static create(properties?: IProto_ICRONServer): Proto_ICRONServer;

    /**
     * Encodes the specified Proto_ICRONServer message. Does not implicitly {@link Proto_ICRONServer.verify|verify} messages.
     * @param message Proto_ICRONServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ICRONServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ICRONServer message, length delimited. Does not implicitly {@link Proto_ICRONServer.verify|verify} messages.
     * @param message Proto_ICRONServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ICRONServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ICRONServer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ICRONServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ICRONServer;

    /**
     * Decodes a Proto_ICRONServer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ICRONServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ICRONServer;

    /**
     * Verifies a Proto_ICRONServer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ICRONServer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ICRONServer
     */
    public static fromObject(object: { [k: string]: any }): Proto_ICRONServer;

    /**
     * Creates a plain object from a Proto_ICRONServer message. Also converts values to other types if specified.
     * @param message Proto_ICRONServer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ICRONServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ICRONServer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUICommand. */
export interface IProto_GUICommand {

    /** Proto_GUICommand ServerCode */
    ServerCode?: (Uint8Array|null);

    /** Proto_GUICommand ServerIP */
    ServerIP?: (Uint8Array|null);

    /** Proto_GUICommand ServerPort */
    ServerPort?: (number|null);

    /** Proto_GUICommand ServerAPIURL */
    ServerAPIURL?: (Uint8Array|null);

    /** Proto_GUICommand GUICommandItem */
    GUICommandItem?: (IProto_GUICommand_Item[]|null);
}

/** Represents a Proto_GUICommand. */
export class Proto_GUICommand implements IProto_GUICommand {

    /**
     * Constructs a new Proto_GUICommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUICommand);

    /** Proto_GUICommand ServerCode. */
    public ServerCode: Uint8Array;

    /** Proto_GUICommand ServerIP. */
    public ServerIP: Uint8Array;

    /** Proto_GUICommand ServerPort. */
    public ServerPort: number;

    /** Proto_GUICommand ServerAPIURL. */
    public ServerAPIURL: Uint8Array;

    /** Proto_GUICommand GUICommandItem. */
    public GUICommandItem: IProto_GUICommand_Item[];

    /**
     * Creates a new Proto_GUICommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUICommand instance
     */
    public static create(properties?: IProto_GUICommand): Proto_GUICommand;

    /**
     * Encodes the specified Proto_GUICommand message. Does not implicitly {@link Proto_GUICommand.verify|verify} messages.
     * @param message Proto_GUICommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUICommand message, length delimited. Does not implicitly {@link Proto_GUICommand.verify|verify} messages.
     * @param message Proto_GUICommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUICommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUICommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUICommand;

    /**
     * Decodes a Proto_GUICommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUICommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUICommand;

    /**
     * Verifies a Proto_GUICommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUICommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUICommand
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUICommand;

    /**
     * Creates a plain object from a Proto_GUICommand message. Also converts values to other types if specified.
     * @param message Proto_GUICommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUICommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUICommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUICommand_Item. */
export interface IProto_GUICommand_Item {

    /** Proto_GUICommand_Item WindowIndex */
    WindowIndex?: (number|null);

    /** Proto_GUICommand_Item Workspace */
    Workspace?: (IProto_GUICommand_Workspace|null);

    /** Proto_GUICommand_Item Explorer */
    Explorer?: (IProto_GUICommand_Explorer|null);

    /** Proto_GUICommand_Item ChildWorkspace */
    ChildWorkspace?: (IProto_GUICommand_ChildWorkspace|null);

    /** Proto_GUICommand_Item Home */
    Home?: (IProto_GUICommand_Home|null);

    /** Proto_GUICommand_Item Document */
    Document?: (IProto_GUICommand_Document|null);

    /** Proto_GUICommand_Item Dashboard */
    Dashboard?: (IProto_GUICommand_Dashboard|null);
}

/** Represents a Proto_GUICommand_Item. */
export class Proto_GUICommand_Item implements IProto_GUICommand_Item {

    /**
     * Constructs a new Proto_GUICommand_Item.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUICommand_Item);

    /** Proto_GUICommand_Item WindowIndex. */
    public WindowIndex: number;

    /** Proto_GUICommand_Item Workspace. */
    public Workspace?: (IProto_GUICommand_Workspace|null);

    /** Proto_GUICommand_Item Explorer. */
    public Explorer?: (IProto_GUICommand_Explorer|null);

    /** Proto_GUICommand_Item ChildWorkspace. */
    public ChildWorkspace?: (IProto_GUICommand_ChildWorkspace|null);

    /** Proto_GUICommand_Item Home. */
    public Home?: (IProto_GUICommand_Home|null);

    /** Proto_GUICommand_Item Document. */
    public Document?: (IProto_GUICommand_Document|null);

    /** Proto_GUICommand_Item Dashboard. */
    public Dashboard?: (IProto_GUICommand_Dashboard|null);

    /** Proto_GUICommand_Item value. */
    public value?: ("Workspace"|"Explorer"|"ChildWorkspace"|"Home"|"Document"|"Dashboard");

    /**
     * Creates a new Proto_GUICommand_Item instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUICommand_Item instance
     */
    public static create(properties?: IProto_GUICommand_Item): Proto_GUICommand_Item;

    /**
     * Encodes the specified Proto_GUICommand_Item message. Does not implicitly {@link Proto_GUICommand_Item.verify|verify} messages.
     * @param message Proto_GUICommand_Item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUICommand_Item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUICommand_Item message, length delimited. Does not implicitly {@link Proto_GUICommand_Item.verify|verify} messages.
     * @param message Proto_GUICommand_Item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUICommand_Item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUICommand_Item message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUICommand_Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUICommand_Item;

    /**
     * Decodes a Proto_GUICommand_Item message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUICommand_Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUICommand_Item;

    /**
     * Verifies a Proto_GUICommand_Item message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUICommand_Item message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUICommand_Item
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUICommand_Item;

    /**
     * Creates a plain object from a Proto_GUICommand_Item message. Also converts values to other types if specified.
     * @param message Proto_GUICommand_Item
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUICommand_Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUICommand_Item to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUICommand_Workspace. */
export interface IProto_GUICommand_Workspace {

    /** Proto_GUICommand_Workspace Operation */
    Operation?: (number|null);

    /** Proto_GUICommand_Workspace WSName */
    WSName?: (Uint8Array|null);

    /** Proto_GUICommand_Workspace ParentReferenceIDWithCN */
    ParentReferenceIDWithCN?: (IProto_ReferenceIDWithCN|null);

    /** Proto_GUICommand_Workspace WSRelation */
    WSRelation?: (Uint8Array|null);

    /** Proto_GUICommand_Workspace PresetName */
    PresetName?: (Uint8Array|null);

    /** Proto_GUICommand_Workspace GroupPresetName */
    GroupPresetName?: (Uint8Array|null);

    /** Proto_GUICommand_Workspace WSScenario */
    WSScenario?: (IProto_Scenario|null);

    /** Proto_GUICommand_Workspace ObjectToSelect */
    ObjectToSelect?: (IProto_ReferenceIDWithCN[]|null);

    /** Proto_GUICommand_Workspace GUIParameterObjectReferenceIDWithCN */
    GUIParameterObjectReferenceIDWithCN?: (IProto_ReferenceIDWithCN|null);

    /** Proto_GUICommand_Workspace GUIParameterEditOption */
    GUIParameterEditOption?: (number|null);
}

/** Represents a Proto_GUICommand_Workspace. */
export class Proto_GUICommand_Workspace implements IProto_GUICommand_Workspace {

    /**
     * Constructs a new Proto_GUICommand_Workspace.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUICommand_Workspace);

    /** Proto_GUICommand_Workspace Operation. */
    public Operation: number;

    /** Proto_GUICommand_Workspace WSName. */
    public WSName: Uint8Array;

    /** Proto_GUICommand_Workspace ParentReferenceIDWithCN. */
    public ParentReferenceIDWithCN?: (IProto_ReferenceIDWithCN|null);

    /** Proto_GUICommand_Workspace WSRelation. */
    public WSRelation: Uint8Array;

    /** Proto_GUICommand_Workspace PresetName. */
    public PresetName: Uint8Array;

    /** Proto_GUICommand_Workspace GroupPresetName. */
    public GroupPresetName: Uint8Array;

    /** Proto_GUICommand_Workspace WSScenario. */
    public WSScenario?: (IProto_Scenario|null);

    /** Proto_GUICommand_Workspace ObjectToSelect. */
    public ObjectToSelect: IProto_ReferenceIDWithCN[];

    /** Proto_GUICommand_Workspace GUIParameterObjectReferenceIDWithCN. */
    public GUIParameterObjectReferenceIDWithCN?: (IProto_ReferenceIDWithCN|null);

    /** Proto_GUICommand_Workspace GUIParameterEditOption. */
    public GUIParameterEditOption: number;

    /**
     * Creates a new Proto_GUICommand_Workspace instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUICommand_Workspace instance
     */
    public static create(properties?: IProto_GUICommand_Workspace): Proto_GUICommand_Workspace;

    /**
     * Encodes the specified Proto_GUICommand_Workspace message. Does not implicitly {@link Proto_GUICommand_Workspace.verify|verify} messages.
     * @param message Proto_GUICommand_Workspace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUICommand_Workspace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUICommand_Workspace message, length delimited. Does not implicitly {@link Proto_GUICommand_Workspace.verify|verify} messages.
     * @param message Proto_GUICommand_Workspace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUICommand_Workspace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUICommand_Workspace message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUICommand_Workspace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUICommand_Workspace;

    /**
     * Decodes a Proto_GUICommand_Workspace message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUICommand_Workspace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUICommand_Workspace;

    /**
     * Verifies a Proto_GUICommand_Workspace message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUICommand_Workspace message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUICommand_Workspace
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUICommand_Workspace;

    /**
     * Creates a plain object from a Proto_GUICommand_Workspace message. Also converts values to other types if specified.
     * @param message Proto_GUICommand_Workspace
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUICommand_Workspace, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUICommand_Workspace to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUICommand_Dashboard. */
export interface IProto_GUICommand_Dashboard {

    /** Proto_GUICommand_Dashboard Operation */
    Operation?: (number|null);

    /** Proto_GUICommand_Dashboard DashboardName */
    DashboardName?: (Uint8Array|null);

    /** Proto_GUICommand_Dashboard DashboardReleaseList */
    DashboardReleaseList?: (IProto_Release_List|null);
}

/** Represents a Proto_GUICommand_Dashboard. */
export class Proto_GUICommand_Dashboard implements IProto_GUICommand_Dashboard {

    /**
     * Constructs a new Proto_GUICommand_Dashboard.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUICommand_Dashboard);

    /** Proto_GUICommand_Dashboard Operation. */
    public Operation: number;

    /** Proto_GUICommand_Dashboard DashboardName. */
    public DashboardName: Uint8Array;

    /** Proto_GUICommand_Dashboard DashboardReleaseList. */
    public DashboardReleaseList?: (IProto_Release_List|null);

    /**
     * Creates a new Proto_GUICommand_Dashboard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUICommand_Dashboard instance
     */
    public static create(properties?: IProto_GUICommand_Dashboard): Proto_GUICommand_Dashboard;

    /**
     * Encodes the specified Proto_GUICommand_Dashboard message. Does not implicitly {@link Proto_GUICommand_Dashboard.verify|verify} messages.
     * @param message Proto_GUICommand_Dashboard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUICommand_Dashboard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUICommand_Dashboard message, length delimited. Does not implicitly {@link Proto_GUICommand_Dashboard.verify|verify} messages.
     * @param message Proto_GUICommand_Dashboard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUICommand_Dashboard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUICommand_Dashboard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUICommand_Dashboard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUICommand_Dashboard;

    /**
     * Decodes a Proto_GUICommand_Dashboard message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUICommand_Dashboard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUICommand_Dashboard;

    /**
     * Verifies a Proto_GUICommand_Dashboard message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUICommand_Dashboard message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUICommand_Dashboard
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUICommand_Dashboard;

    /**
     * Creates a plain object from a Proto_GUICommand_Dashboard message. Also converts values to other types if specified.
     * @param message Proto_GUICommand_Dashboard
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUICommand_Dashboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUICommand_Dashboard to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUICommand_Explorer. */
export interface IProto_GUICommand_Explorer {

    /** Proto_GUICommand_Explorer Operation */
    Operation?: (number|null);

    /** Proto_GUICommand_Explorer ExplorerName */
    ExplorerName?: (Uint8Array|null);
}

/** Represents a Proto_GUICommand_Explorer. */
export class Proto_GUICommand_Explorer implements IProto_GUICommand_Explorer {

    /**
     * Constructs a new Proto_GUICommand_Explorer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUICommand_Explorer);

    /** Proto_GUICommand_Explorer Operation. */
    public Operation: number;

    /** Proto_GUICommand_Explorer ExplorerName. */
    public ExplorerName: Uint8Array;

    /**
     * Creates a new Proto_GUICommand_Explorer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUICommand_Explorer instance
     */
    public static create(properties?: IProto_GUICommand_Explorer): Proto_GUICommand_Explorer;

    /**
     * Encodes the specified Proto_GUICommand_Explorer message. Does not implicitly {@link Proto_GUICommand_Explorer.verify|verify} messages.
     * @param message Proto_GUICommand_Explorer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUICommand_Explorer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUICommand_Explorer message, length delimited. Does not implicitly {@link Proto_GUICommand_Explorer.verify|verify} messages.
     * @param message Proto_GUICommand_Explorer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUICommand_Explorer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUICommand_Explorer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUICommand_Explorer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUICommand_Explorer;

    /**
     * Decodes a Proto_GUICommand_Explorer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUICommand_Explorer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUICommand_Explorer;

    /**
     * Verifies a Proto_GUICommand_Explorer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUICommand_Explorer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUICommand_Explorer
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUICommand_Explorer;

    /**
     * Creates a plain object from a Proto_GUICommand_Explorer message. Also converts values to other types if specified.
     * @param message Proto_GUICommand_Explorer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUICommand_Explorer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUICommand_Explorer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUICommand_Home. */
export interface IProto_GUICommand_Home {

    /** Proto_GUICommand_Home Operation */
    Operation?: (number|null);

    /** Proto_GUICommand_Home Process */
    Process?: (Uint8Array|null);
}

/** Represents a Proto_GUICommand_Home. */
export class Proto_GUICommand_Home implements IProto_GUICommand_Home {

    /**
     * Constructs a new Proto_GUICommand_Home.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUICommand_Home);

    /** Proto_GUICommand_Home Operation. */
    public Operation: number;

    /** Proto_GUICommand_Home Process. */
    public Process: Uint8Array;

    /**
     * Creates a new Proto_GUICommand_Home instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUICommand_Home instance
     */
    public static create(properties?: IProto_GUICommand_Home): Proto_GUICommand_Home;

    /**
     * Encodes the specified Proto_GUICommand_Home message. Does not implicitly {@link Proto_GUICommand_Home.verify|verify} messages.
     * @param message Proto_GUICommand_Home message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUICommand_Home, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUICommand_Home message, length delimited. Does not implicitly {@link Proto_GUICommand_Home.verify|verify} messages.
     * @param message Proto_GUICommand_Home message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUICommand_Home, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUICommand_Home message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUICommand_Home
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUICommand_Home;

    /**
     * Decodes a Proto_GUICommand_Home message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUICommand_Home
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUICommand_Home;

    /**
     * Verifies a Proto_GUICommand_Home message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUICommand_Home message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUICommand_Home
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUICommand_Home;

    /**
     * Creates a plain object from a Proto_GUICommand_Home message. Also converts values to other types if specified.
     * @param message Proto_GUICommand_Home
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUICommand_Home, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUICommand_Home to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUICommand_Document. */
export interface IProto_GUICommand_Document {

    /** Proto_GUICommand_Document Operation */
    Operation?: (number|null);

    /** Proto_GUICommand_Document DocumentTypeName */
    DocumentTypeName?: (Uint8Array|null);

    /** Proto_GUICommand_Document Key */
    Key?: (Uint8Array|null);
}

/** Represents a Proto_GUICommand_Document. */
export class Proto_GUICommand_Document implements IProto_GUICommand_Document {

    /**
     * Constructs a new Proto_GUICommand_Document.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUICommand_Document);

    /** Proto_GUICommand_Document Operation. */
    public Operation: number;

    /** Proto_GUICommand_Document DocumentTypeName. */
    public DocumentTypeName: Uint8Array;

    /** Proto_GUICommand_Document Key. */
    public Key: Uint8Array;

    /**
     * Creates a new Proto_GUICommand_Document instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUICommand_Document instance
     */
    public static create(properties?: IProto_GUICommand_Document): Proto_GUICommand_Document;

    /**
     * Encodes the specified Proto_GUICommand_Document message. Does not implicitly {@link Proto_GUICommand_Document.verify|verify} messages.
     * @param message Proto_GUICommand_Document message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUICommand_Document, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUICommand_Document message, length delimited. Does not implicitly {@link Proto_GUICommand_Document.verify|verify} messages.
     * @param message Proto_GUICommand_Document message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUICommand_Document, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUICommand_Document message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUICommand_Document
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUICommand_Document;

    /**
     * Decodes a Proto_GUICommand_Document message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUICommand_Document
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUICommand_Document;

    /**
     * Verifies a Proto_GUICommand_Document message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUICommand_Document message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUICommand_Document
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUICommand_Document;

    /**
     * Creates a plain object from a Proto_GUICommand_Document message. Also converts values to other types if specified.
     * @param message Proto_GUICommand_Document
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUICommand_Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUICommand_Document to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GUICommand_ChildWorkspace. */
export interface IProto_GUICommand_ChildWorkspace {

    /** Proto_GUICommand_ChildWorkspace Operation */
    Operation?: (number|null);

    /** Proto_GUICommand_ChildWorkspace WSName */
    WSName?: (Uint8Array|null);

    /** Proto_GUICommand_ChildWorkspace ParentWSName */
    ParentWSName?: (Uint8Array|null);

    /** Proto_GUICommand_ChildWorkspace WSRelation */
    WSRelation?: (Uint8Array|null);

    /** Proto_GUICommand_ChildWorkspace PresetName */
    PresetName?: (Uint8Array|null);

    /** Proto_GUICommand_ChildWorkspace GroupPresetName */
    GroupPresetName?: (Uint8Array|null);

    /** Proto_GUICommand_ChildWorkspace ClassNames */
    ClassNames?: (Uint8Array|null);

    /** Proto_GUICommand_ChildWorkspace Alignment */
    Alignment?: (number|null);

    /** Proto_GUICommand_ChildWorkspace ObjectToSelect */
    ObjectToSelect?: (IProto_ReferenceIDWithCN[]|null);
}

/** Represents a Proto_GUICommand_ChildWorkspace. */
export class Proto_GUICommand_ChildWorkspace implements IProto_GUICommand_ChildWorkspace {

    /**
     * Constructs a new Proto_GUICommand_ChildWorkspace.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GUICommand_ChildWorkspace);

    /** Proto_GUICommand_ChildWorkspace Operation. */
    public Operation: number;

    /** Proto_GUICommand_ChildWorkspace WSName. */
    public WSName: Uint8Array;

    /** Proto_GUICommand_ChildWorkspace ParentWSName. */
    public ParentWSName: Uint8Array;

    /** Proto_GUICommand_ChildWorkspace WSRelation. */
    public WSRelation: Uint8Array;

    /** Proto_GUICommand_ChildWorkspace PresetName. */
    public PresetName: Uint8Array;

    /** Proto_GUICommand_ChildWorkspace GroupPresetName. */
    public GroupPresetName: Uint8Array;

    /** Proto_GUICommand_ChildWorkspace ClassNames. */
    public ClassNames: Uint8Array;

    /** Proto_GUICommand_ChildWorkspace Alignment. */
    public Alignment: number;

    /** Proto_GUICommand_ChildWorkspace ObjectToSelect. */
    public ObjectToSelect: IProto_ReferenceIDWithCN[];

    /**
     * Creates a new Proto_GUICommand_ChildWorkspace instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GUICommand_ChildWorkspace instance
     */
    public static create(properties?: IProto_GUICommand_ChildWorkspace): Proto_GUICommand_ChildWorkspace;

    /**
     * Encodes the specified Proto_GUICommand_ChildWorkspace message. Does not implicitly {@link Proto_GUICommand_ChildWorkspace.verify|verify} messages.
     * @param message Proto_GUICommand_ChildWorkspace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GUICommand_ChildWorkspace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GUICommand_ChildWorkspace message, length delimited. Does not implicitly {@link Proto_GUICommand_ChildWorkspace.verify|verify} messages.
     * @param message Proto_GUICommand_ChildWorkspace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GUICommand_ChildWorkspace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GUICommand_ChildWorkspace message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GUICommand_ChildWorkspace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GUICommand_ChildWorkspace;

    /**
     * Decodes a Proto_GUICommand_ChildWorkspace message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GUICommand_ChildWorkspace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GUICommand_ChildWorkspace;

    /**
     * Verifies a Proto_GUICommand_ChildWorkspace message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GUICommand_ChildWorkspace message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GUICommand_ChildWorkspace
     */
    public static fromObject(object: { [k: string]: any }): Proto_GUICommand_ChildWorkspace;

    /**
     * Creates a plain object from a Proto_GUICommand_ChildWorkspace message. Also converts values to other types if specified.
     * @param message Proto_GUICommand_ChildWorkspace
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GUICommand_ChildWorkspace, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GUICommand_ChildWorkspace to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ReplyValue. */
export interface IProto_ReplyValue {

    /** Proto_ReplyValue stringvalue */
    stringvalue?: (Uint8Array|null);

    /** Proto_ReplyValue timevalue */
    timevalue?: (number|Long|null);

    /** Proto_ReplyValue numbervalue */
    numbervalue?: (number|null);

    /** Proto_ReplyValue integervalue */
    integervalue?: (number|Long|null);

    /** Proto_ReplyValue referenceid */
    referenceid?: (number|Long|null);

    /** Proto_ReplyValue isnullvalue */
    isnullvalue?: (boolean|null);

    /** Proto_ReplyValue interfaceresulttype */
    interfaceresulttype?: (number|null);

    /** Proto_ReplyValue successful */
    successful?: (boolean|null);

    /** Proto_ReplyValue requestId */
    requestId?: (number|Long|null);

    /** Proto_ReplyValue requestScenarioId */
    requestScenarioId?: (number|null);

    /** Proto_ReplyValue requestParentScenarioId */
    requestParentScenarioId?: (number|null);

    /** Proto_ReplyValue ObjectClassName */
    ObjectClassName?: (Uint8Array|null);

    /** Proto_ReplyValue ObjectReferenceID */
    ObjectReferenceID?: (number|Long|null);

    /** Proto_ReplyValue Message */
    Message?: (Uint8Array|null);

    /** Proto_ReplyValue MessageBoxButtonType */
    MessageBoxButtonType?: (number|null);

    /** Proto_ReplyValue FormName */
    FormName?: (Uint8Array|null);

    /** Proto_ReplyValue ClientRequestID */
    ClientRequestID?: (number|null);

    /** Proto_ReplyValue GUICommand */
    GUICommand?: (IProto_GUICommand[]|null);

    /** Proto_ReplyValue processreleasedata */
    processreleasedata?: (IProto_ProcessReleaseData|null);

    /** Proto_ReplyValue serverinstanceid */
    serverinstanceid?: (number|null);
}

/** Represents a Proto_ReplyValue. */
export class Proto_ReplyValue implements IProto_ReplyValue {

    /**
     * Constructs a new Proto_ReplyValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ReplyValue);

    /** Proto_ReplyValue stringvalue. */
    public stringvalue?: (Uint8Array|null);

    /** Proto_ReplyValue timevalue. */
    public timevalue?: (number|Long|null);

    /** Proto_ReplyValue numbervalue. */
    public numbervalue?: (number|null);

    /** Proto_ReplyValue integervalue. */
    public integervalue?: (number|Long|null);

    /** Proto_ReplyValue referenceid. */
    public referenceid?: (number|Long|null);

    /** Proto_ReplyValue isnullvalue. */
    public isnullvalue?: (boolean|null);

    /** Proto_ReplyValue interfaceresulttype. */
    public interfaceresulttype: number;

    /** Proto_ReplyValue successful. */
    public successful: boolean;

    /** Proto_ReplyValue requestId. */
    public requestId: (number|Long);

    /** Proto_ReplyValue requestScenarioId. */
    public requestScenarioId: number;

    /** Proto_ReplyValue requestParentScenarioId. */
    public requestParentScenarioId: number;

    /** Proto_ReplyValue ObjectClassName. */
    public ObjectClassName: Uint8Array;

    /** Proto_ReplyValue ObjectReferenceID. */
    public ObjectReferenceID: (number|Long);

    /** Proto_ReplyValue Message. */
    public Message: Uint8Array;

    /** Proto_ReplyValue MessageBoxButtonType. */
    public MessageBoxButtonType: number;

    /** Proto_ReplyValue FormName. */
    public FormName: Uint8Array;

    /** Proto_ReplyValue ClientRequestID. */
    public ClientRequestID: number;

    /** Proto_ReplyValue GUICommand. */
    public GUICommand: IProto_GUICommand[];

    /** Proto_ReplyValue processreleasedata. */
    public processreleasedata?: (IProto_ProcessReleaseData|null);

    /** Proto_ReplyValue serverinstanceid. */
    public serverinstanceid: number;

    /** Proto_ReplyValue value. */
    public value?: ("stringvalue"|"timevalue"|"numbervalue"|"integervalue"|"referenceid"|"isnullvalue");

    /**
     * Creates a new Proto_ReplyValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ReplyValue instance
     */
    public static create(properties?: IProto_ReplyValue): Proto_ReplyValue;

    /**
     * Encodes the specified Proto_ReplyValue message. Does not implicitly {@link Proto_ReplyValue.verify|verify} messages.
     * @param message Proto_ReplyValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ReplyValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ReplyValue message, length delimited. Does not implicitly {@link Proto_ReplyValue.verify|verify} messages.
     * @param message Proto_ReplyValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ReplyValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ReplyValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ReplyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ReplyValue;

    /**
     * Decodes a Proto_ReplyValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ReplyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ReplyValue;

    /**
     * Verifies a Proto_ReplyValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ReplyValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ReplyValue
     */
    public static fromObject(object: { [k: string]: any }): Proto_ReplyValue;

    /**
     * Creates a plain object from a Proto_ReplyValue message. Also converts values to other types if specified.
     * @param message Proto_ReplyValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ReplyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ReplyValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ClientLoginResponse. */
export interface IProto_ClientLoginResponse {

    /** Proto_ClientLoginResponse successful */
    successful?: (boolean|null);

    /** Proto_ClientLoginResponse ErrorMessage */
    ErrorMessage?: (Uint8Array|null);

    /** Proto_ClientLoginResponse serverinstanceid */
    serverinstanceid?: (number|null);

    /** Proto_ClientLoginResponse UserReferenceId */
    UserReferenceId?: (number|Long|null);

    /** Proto_ClientLoginResponse Language */
    Language?: (Uint8Array|null);

    /** Proto_ClientLoginResponse TraceHost */
    TraceHost?: (Uint8Array|null);

    /** Proto_ClientLoginResponse TracePort */
    TracePort?: (number|null);

    /** Proto_ClientLoginResponse TraceRatio */
    TraceRatio?: (number|null);

    /** Proto_ClientLoginResponse AutoConnect */
    AutoConnect?: (IProto_ICRONServer[]|null);
}

/** Represents a Proto_ClientLoginResponse. */
export class Proto_ClientLoginResponse implements IProto_ClientLoginResponse {

    /**
     * Constructs a new Proto_ClientLoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ClientLoginResponse);

    /** Proto_ClientLoginResponse successful. */
    public successful: boolean;

    /** Proto_ClientLoginResponse ErrorMessage. */
    public ErrorMessage: Uint8Array;

    /** Proto_ClientLoginResponse serverinstanceid. */
    public serverinstanceid: number;

    /** Proto_ClientLoginResponse UserReferenceId. */
    public UserReferenceId: (number|Long);

    /** Proto_ClientLoginResponse Language. */
    public Language: Uint8Array;

    /** Proto_ClientLoginResponse TraceHost. */
    public TraceHost: Uint8Array;

    /** Proto_ClientLoginResponse TracePort. */
    public TracePort: number;

    /** Proto_ClientLoginResponse TraceRatio. */
    public TraceRatio: number;

    /** Proto_ClientLoginResponse AutoConnect. */
    public AutoConnect: IProto_ICRONServer[];

    /**
     * Creates a new Proto_ClientLoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ClientLoginResponse instance
     */
    public static create(properties?: IProto_ClientLoginResponse): Proto_ClientLoginResponse;

    /**
     * Encodes the specified Proto_ClientLoginResponse message. Does not implicitly {@link Proto_ClientLoginResponse.verify|verify} messages.
     * @param message Proto_ClientLoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ClientLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ClientLoginResponse message, length delimited. Does not implicitly {@link Proto_ClientLoginResponse.verify|verify} messages.
     * @param message Proto_ClientLoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ClientLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ClientLoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ClientLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ClientLoginResponse;

    /**
     * Decodes a Proto_ClientLoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ClientLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ClientLoginResponse;

    /**
     * Verifies a Proto_ClientLoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ClientLoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ClientLoginResponse
     */
    public static fromObject(object: { [k: string]: any }): Proto_ClientLoginResponse;

    /**
     * Creates a plain object from a Proto_ClientLoginResponse message. Also converts values to other types if specified.
     * @param message Proto_ClientLoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ClientLoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ClientLoginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataSet. */
export interface IProto_DataSet {

    /** Proto_DataSet table */
    table?: (IProto_DataTable[]|null);

    /** Proto_DataSet CachedString */
    CachedString?: (Uint8Array[]|null);
}

/** Represents a Proto_DataSet. */
export class Proto_DataSet implements IProto_DataSet {

    /**
     * Constructs a new Proto_DataSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataSet);

    /** Proto_DataSet table. */
    public table: IProto_DataTable[];

    /** Proto_DataSet CachedString. */
    public CachedString: Uint8Array[];

    /**
     * Creates a new Proto_DataSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataSet instance
     */
    public static create(properties?: IProto_DataSet): Proto_DataSet;

    /**
     * Encodes the specified Proto_DataSet message. Does not implicitly {@link Proto_DataSet.verify|verify} messages.
     * @param message Proto_DataSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataSet message, length delimited. Does not implicitly {@link Proto_DataSet.verify|verify} messages.
     * @param message Proto_DataSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataSet;

    /**
     * Decodes a Proto_DataSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataSet;

    /**
     * Verifies a Proto_DataSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataSet
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataSet;

    /**
     * Creates a plain object from a Proto_DataSet message. Also converts values to other types if specified.
     * @param message Proto_DataSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ProcessReleaseData. */
export interface IProto_ProcessReleaseData {

    /** Proto_ProcessReleaseData ReleaseContextName */
    ReleaseContextName?: (Uint8Array|null);

    /** Proto_ProcessReleaseData ProcessCode */
    ProcessCode?: (Uint8Array|null);

    /** Proto_ProcessReleaseData ReleaseClassData */
    ReleaseClassData?: (IProto_ReleaseClassData[]|null);
}

/** Represents a Proto_ProcessReleaseData. */
export class Proto_ProcessReleaseData implements IProto_ProcessReleaseData {

    /**
     * Constructs a new Proto_ProcessReleaseData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ProcessReleaseData);

    /** Proto_ProcessReleaseData ReleaseContextName. */
    public ReleaseContextName: Uint8Array;

    /** Proto_ProcessReleaseData ProcessCode. */
    public ProcessCode: Uint8Array;

    /** Proto_ProcessReleaseData ReleaseClassData. */
    public ReleaseClassData: IProto_ReleaseClassData[];

    /**
     * Creates a new Proto_ProcessReleaseData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ProcessReleaseData instance
     */
    public static create(properties?: IProto_ProcessReleaseData): Proto_ProcessReleaseData;

    /**
     * Encodes the specified Proto_ProcessReleaseData message. Does not implicitly {@link Proto_ProcessReleaseData.verify|verify} messages.
     * @param message Proto_ProcessReleaseData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ProcessReleaseData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ProcessReleaseData message, length delimited. Does not implicitly {@link Proto_ProcessReleaseData.verify|verify} messages.
     * @param message Proto_ProcessReleaseData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ProcessReleaseData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ProcessReleaseData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ProcessReleaseData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ProcessReleaseData;

    /**
     * Decodes a Proto_ProcessReleaseData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ProcessReleaseData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ProcessReleaseData;

    /**
     * Verifies a Proto_ProcessReleaseData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ProcessReleaseData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ProcessReleaseData
     */
    public static fromObject(object: { [k: string]: any }): Proto_ProcessReleaseData;

    /**
     * Creates a plain object from a Proto_ProcessReleaseData message. Also converts values to other types if specified.
     * @param message Proto_ProcessReleaseData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ProcessReleaseData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ProcessReleaseData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ReleaseClassData. */
export interface IProto_ReleaseClassData {

    /** Proto_ReleaseClassData ReleaseClassName */
    ReleaseClassName?: (Uint8Array|null);

    /** Proto_ReleaseClassData SharedSchemaClassName */
    SharedSchemaClassName?: (Uint8Array|null);

    /** Proto_ReleaseClassData ProtoDataTableAsString */
    ProtoDataTableAsString?: (Uint8Array|null);
}

/** Represents a Proto_ReleaseClassData. */
export class Proto_ReleaseClassData implements IProto_ReleaseClassData {

    /**
     * Constructs a new Proto_ReleaseClassData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ReleaseClassData);

    /** Proto_ReleaseClassData ReleaseClassName. */
    public ReleaseClassName: Uint8Array;

    /** Proto_ReleaseClassData SharedSchemaClassName. */
    public SharedSchemaClassName: Uint8Array;

    /** Proto_ReleaseClassData ProtoDataTableAsString. */
    public ProtoDataTableAsString: Uint8Array;

    /**
     * Creates a new Proto_ReleaseClassData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ReleaseClassData instance
     */
    public static create(properties?: IProto_ReleaseClassData): Proto_ReleaseClassData;

    /**
     * Encodes the specified Proto_ReleaseClassData message. Does not implicitly {@link Proto_ReleaseClassData.verify|verify} messages.
     * @param message Proto_ReleaseClassData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ReleaseClassData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ReleaseClassData message, length delimited. Does not implicitly {@link Proto_ReleaseClassData.verify|verify} messages.
     * @param message Proto_ReleaseClassData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ReleaseClassData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ReleaseClassData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ReleaseClassData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ReleaseClassData;

    /**
     * Decodes a Proto_ReleaseClassData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ReleaseClassData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ReleaseClassData;

    /**
     * Verifies a Proto_ReleaseClassData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ReleaseClassData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ReleaseClassData
     */
    public static fromObject(object: { [k: string]: any }): Proto_ReleaseClassData;

    /**
     * Creates a plain object from a Proto_ReleaseClassData message. Also converts values to other types if specified.
     * @param message Proto_ReleaseClassData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ReleaseClassData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ReleaseClassData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ReleaseSet. */
export interface IProto_ReleaseSet {

    /** Proto_ReleaseSet releasetable */
    releasetable?: (IProto_ReleaseTable[]|null);
}

/** Represents a Proto_ReleaseSet. */
export class Proto_ReleaseSet implements IProto_ReleaseSet {

    /**
     * Constructs a new Proto_ReleaseSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ReleaseSet);

    /** Proto_ReleaseSet releasetable. */
    public releasetable: IProto_ReleaseTable[];

    /**
     * Creates a new Proto_ReleaseSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ReleaseSet instance
     */
    public static create(properties?: IProto_ReleaseSet): Proto_ReleaseSet;

    /**
     * Encodes the specified Proto_ReleaseSet message. Does not implicitly {@link Proto_ReleaseSet.verify|verify} messages.
     * @param message Proto_ReleaseSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ReleaseSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ReleaseSet message, length delimited. Does not implicitly {@link Proto_ReleaseSet.verify|verify} messages.
     * @param message Proto_ReleaseSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ReleaseSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ReleaseSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ReleaseSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ReleaseSet;

    /**
     * Decodes a Proto_ReleaseSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ReleaseSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ReleaseSet;

    /**
     * Verifies a Proto_ReleaseSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ReleaseSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ReleaseSet
     */
    public static fromObject(object: { [k: string]: any }): Proto_ReleaseSet;

    /**
     * Creates a plain object from a Proto_ReleaseSet message. Also converts values to other types if specified.
     * @param message Proto_ReleaseSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ReleaseSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ReleaseSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ReleaseTable. */
export interface IProto_ReleaseTable {

    /** Proto_ReleaseTable ReleaseClassName */
    ReleaseClassName?: (Uint8Array|null);

    /** Proto_ReleaseTable RelationName */
    RelationName?: (Uint8Array|null);

    /** Proto_ReleaseTable ProcessReleaseID */
    ProcessReleaseID?: (number|Long|null);

    /** Proto_ReleaseTable ProtoDataTableAsString */
    ProtoDataTableAsString?: (Uint8Array|null);
}

/** Represents a Proto_ReleaseTable. */
export class Proto_ReleaseTable implements IProto_ReleaseTable {

    /**
     * Constructs a new Proto_ReleaseTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ReleaseTable);

    /** Proto_ReleaseTable ReleaseClassName. */
    public ReleaseClassName: Uint8Array;

    /** Proto_ReleaseTable RelationName. */
    public RelationName: Uint8Array;

    /** Proto_ReleaseTable ProcessReleaseID. */
    public ProcessReleaseID: (number|Long);

    /** Proto_ReleaseTable ProtoDataTableAsString. */
    public ProtoDataTableAsString: Uint8Array;

    /**
     * Creates a new Proto_ReleaseTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ReleaseTable instance
     */
    public static create(properties?: IProto_ReleaseTable): Proto_ReleaseTable;

    /**
     * Encodes the specified Proto_ReleaseTable message. Does not implicitly {@link Proto_ReleaseTable.verify|verify} messages.
     * @param message Proto_ReleaseTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ReleaseTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ReleaseTable message, length delimited. Does not implicitly {@link Proto_ReleaseTable.verify|verify} messages.
     * @param message Proto_ReleaseTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ReleaseTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ReleaseTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ReleaseTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ReleaseTable;

    /**
     * Decodes a Proto_ReleaseTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ReleaseTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ReleaseTable;

    /**
     * Verifies a Proto_ReleaseTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ReleaseTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ReleaseTable
     */
    public static fromObject(object: { [k: string]: any }): Proto_ReleaseTable;

    /**
     * Creates a plain object from a Proto_ReleaseTable message. Also converts values to other types if specified.
     * @param message Proto_ReleaseTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ReleaseTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ReleaseTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataTable. */
export interface IProto_DataTable {

    /** Proto_DataTable code */
    code?: (Uint8Array|null);

    /** Proto_DataTable ParentReferenceID */
    ParentReferenceID?: ((number|Long)[]|null);

    /** Proto_DataTable rowobjectclassnamesimple */
    rowobjectclassnamesimple?: (Uint8Array|null);

    /** Proto_DataTable scenarioid */
    scenarioid?: (number|null);

    /** Proto_DataTable lastrevisioninfo */
    lastrevisioninfo?: (Uint8Array|null);

    /** Proto_DataTable column */
    column?: (IProto_DTSchemaColumn[]|null);

    /** Proto_DataTable row */
    row?: (IProto_DataTableRow[]|null);

    /** Proto_DataTable CachedString */
    CachedString?: (Uint8Array[]|null);
}

/** Represents a Proto_DataTable. */
export class Proto_DataTable implements IProto_DataTable {

    /**
     * Constructs a new Proto_DataTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataTable);

    /** Proto_DataTable code. */
    public code: Uint8Array;

    /** Proto_DataTable ParentReferenceID. */
    public ParentReferenceID: (number|Long)[];

    /** Proto_DataTable rowobjectclassnamesimple. */
    public rowobjectclassnamesimple: Uint8Array;

    /** Proto_DataTable scenarioid. */
    public scenarioid: number;

    /** Proto_DataTable lastrevisioninfo. */
    public lastrevisioninfo: Uint8Array;

    /** Proto_DataTable column. */
    public column: IProto_DTSchemaColumn[];

    /** Proto_DataTable row. */
    public row: IProto_DataTableRow[];

    /** Proto_DataTable CachedString. */
    public CachedString: Uint8Array[];

    /**
     * Creates a new Proto_DataTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataTable instance
     */
    public static create(properties?: IProto_DataTable): Proto_DataTable;

    /**
     * Encodes the specified Proto_DataTable message. Does not implicitly {@link Proto_DataTable.verify|verify} messages.
     * @param message Proto_DataTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataTable message, length delimited. Does not implicitly {@link Proto_DataTable.verify|verify} messages.
     * @param message Proto_DataTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataTable;

    /**
     * Decodes a Proto_DataTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataTable;

    /**
     * Verifies a Proto_DataTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataTable
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataTable;

    /**
     * Creates a plain object from a Proto_DataTable message. Also converts values to other types if specified.
     * @param message Proto_DataTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DTSchemaColumn. */
export interface IProto_DTSchemaColumn {

    /** Proto_DTSchemaColumn code */
    code?: (Uint8Array|null);

    /** Proto_DTSchemaColumn accesstype */
    accesstype?: (number|null);

    /** Proto_DTSchemaColumn fieldtype */
    fieldtype?: (number|null);
}

/** Represents a Proto_DTSchemaColumn. */
export class Proto_DTSchemaColumn implements IProto_DTSchemaColumn {

    /**
     * Constructs a new Proto_DTSchemaColumn.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DTSchemaColumn);

    /** Proto_DTSchemaColumn code. */
    public code: Uint8Array;

    /** Proto_DTSchemaColumn accesstype. */
    public accesstype: number;

    /** Proto_DTSchemaColumn fieldtype. */
    public fieldtype: number;

    /**
     * Creates a new Proto_DTSchemaColumn instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DTSchemaColumn instance
     */
    public static create(properties?: IProto_DTSchemaColumn): Proto_DTSchemaColumn;

    /**
     * Encodes the specified Proto_DTSchemaColumn message. Does not implicitly {@link Proto_DTSchemaColumn.verify|verify} messages.
     * @param message Proto_DTSchemaColumn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DTSchemaColumn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DTSchemaColumn message, length delimited. Does not implicitly {@link Proto_DTSchemaColumn.verify|verify} messages.
     * @param message Proto_DTSchemaColumn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DTSchemaColumn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DTSchemaColumn message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DTSchemaColumn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DTSchemaColumn;

    /**
     * Decodes a Proto_DTSchemaColumn message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DTSchemaColumn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DTSchemaColumn;

    /**
     * Verifies a Proto_DTSchemaColumn message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DTSchemaColumn message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DTSchemaColumn
     */
    public static fromObject(object: { [k: string]: any }): Proto_DTSchemaColumn;

    /**
     * Creates a plain object from a Proto_DTSchemaColumn message. Also converts values to other types if specified.
     * @param message Proto_DTSchemaColumn
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DTSchemaColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DTSchemaColumn to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataTableRow. */
export interface IProto_DataTableRow {

    /** Proto_DataTableRow value */
    value?: (IProto_DataTableValue[]|null);

    /** Proto_DataTableRow RowObjectReferenceID */
    RowObjectReferenceID?: (number|Long|null);

    /** Proto_DataTableRow RowObjectDBID */
    RowObjectDBID?: (number|Long|null);

    /** Proto_DataTableRow RowObjectRevisionInfo */
    RowObjectRevisionInfo?: (Uint8Array|null);

    /** Proto_DataTableRow Sequence */
    Sequence?: (number|null);
}

/** Represents a Proto_DataTableRow. */
export class Proto_DataTableRow implements IProto_DataTableRow {

    /**
     * Constructs a new Proto_DataTableRow.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataTableRow);

    /** Proto_DataTableRow value. */
    public value: IProto_DataTableValue[];

    /** Proto_DataTableRow RowObjectReferenceID. */
    public RowObjectReferenceID: (number|Long);

    /** Proto_DataTableRow RowObjectDBID. */
    public RowObjectDBID: (number|Long);

    /** Proto_DataTableRow RowObjectRevisionInfo. */
    public RowObjectRevisionInfo: Uint8Array;

    /** Proto_DataTableRow Sequence. */
    public Sequence: number;

    /**
     * Creates a new Proto_DataTableRow instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataTableRow instance
     */
    public static create(properties?: IProto_DataTableRow): Proto_DataTableRow;

    /**
     * Encodes the specified Proto_DataTableRow message. Does not implicitly {@link Proto_DataTableRow.verify|verify} messages.
     * @param message Proto_DataTableRow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataTableRow message, length delimited. Does not implicitly {@link Proto_DataTableRow.verify|verify} messages.
     * @param message Proto_DataTableRow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataTableRow message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataTableRow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataTableRow;

    /**
     * Decodes a Proto_DataTableRow message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataTableRow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataTableRow;

    /**
     * Verifies a Proto_DataTableRow message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataTableRow message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataTableRow
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataTableRow;

    /**
     * Creates a plain object from a Proto_DataTableRow message. Also converts values to other types if specified.
     * @param message Proto_DataTableRow
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataTableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataTableRow to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataTableValue. */
export interface IProto_DataTableValue {

    /** Proto_DataTableValue referenceid */
    referenceid?: (number|Long|null);

    /** Proto_DataTableValue stringvalue */
    stringvalue?: (Uint8Array|null);

    /** Proto_DataTableValue timevalue */
    timevalue?: (number|Long|null);

    /** Proto_DataTableValue numbervalue */
    numbervalue?: (number|null);

    /** Proto_DataTableValue numbervalueInt32 */
    numbervalueInt32?: (number|null);

    /** Proto_DataTableValue numbervalueInt64 */
    numbervalueInt64?: (number|Long|null);

    /** Proto_DataTableValue numbervalueBool */
    numbervalueBool?: (boolean|null);

    /** Proto_DataTableValue stringindex */
    stringindex?: (number|null);

    /** Proto_DataTableValue isnullvalue */
    isnullvalue?: (boolean|null);
}

/** Represents a Proto_DataTableValue. */
export class Proto_DataTableValue implements IProto_DataTableValue {

    /**
     * Constructs a new Proto_DataTableValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataTableValue);

    /** Proto_DataTableValue referenceid. */
    public referenceid?: (number|Long|null);

    /** Proto_DataTableValue stringvalue. */
    public stringvalue?: (Uint8Array|null);

    /** Proto_DataTableValue timevalue. */
    public timevalue?: (number|Long|null);

    /** Proto_DataTableValue numbervalue. */
    public numbervalue?: (number|null);

    /** Proto_DataTableValue numbervalueInt32. */
    public numbervalueInt32?: (number|null);

    /** Proto_DataTableValue numbervalueInt64. */
    public numbervalueInt64?: (number|Long|null);

    /** Proto_DataTableValue numbervalueBool. */
    public numbervalueBool?: (boolean|null);

    /** Proto_DataTableValue stringindex. */
    public stringindex?: (number|null);

    /** Proto_DataTableValue isnullvalue. */
    public isnullvalue?: (boolean|null);

    /** Proto_DataTableValue value. */
    public value?: ("referenceid"|"stringvalue"|"timevalue"|"numbervalue"|"numbervalueInt32"|"numbervalueInt64"|"numbervalueBool"|"stringindex"|"isnullvalue");

    /**
     * Creates a new Proto_DataTableValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataTableValue instance
     */
    public static create(properties?: IProto_DataTableValue): Proto_DataTableValue;

    /**
     * Encodes the specified Proto_DataTableValue message. Does not implicitly {@link Proto_DataTableValue.verify|verify} messages.
     * @param message Proto_DataTableValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataTableValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataTableValue message, length delimited. Does not implicitly {@link Proto_DataTableValue.verify|verify} messages.
     * @param message Proto_DataTableValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataTableValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataTableValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataTableValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataTableValue;

    /**
     * Decodes a Proto_DataTableValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataTableValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataTableValue;

    /**
     * Verifies a Proto_DataTableValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataTableValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataTableValue
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataTableValue;

    /**
     * Creates a plain object from a Proto_DataTableValue message. Also converts values to other types if specified.
     * @param message Proto_DataTableValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataTableValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataTableValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_CommandList. */
export interface IProto_CommandList {

    /** Proto_CommandList Commands */
    Commands?: (IProto_Command[]|null);
}

/** Represents a Proto_CommandList. */
export class Proto_CommandList implements IProto_CommandList {

    /**
     * Constructs a new Proto_CommandList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_CommandList);

    /** Proto_CommandList Commands. */
    public Commands: IProto_Command[];

    /**
     * Creates a new Proto_CommandList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_CommandList instance
     */
    public static create(properties?: IProto_CommandList): Proto_CommandList;

    /**
     * Encodes the specified Proto_CommandList message. Does not implicitly {@link Proto_CommandList.verify|verify} messages.
     * @param message Proto_CommandList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_CommandList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_CommandList message, length delimited. Does not implicitly {@link Proto_CommandList.verify|verify} messages.
     * @param message Proto_CommandList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_CommandList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_CommandList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_CommandList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_CommandList;

    /**
     * Decodes a Proto_CommandList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_CommandList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_CommandList;

    /**
     * Verifies a Proto_CommandList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_CommandList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_CommandList
     */
    public static fromObject(object: { [k: string]: any }): Proto_CommandList;

    /**
     * Creates a plain object from a Proto_CommandList message. Also converts values to other types if specified.
     * @param message Proto_CommandList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_CommandList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_CommandList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Command. */
export interface IProto_Command {

    /** Proto_Command command */
    command?: (Uint8Array|null);

    /** Proto_Command label */
    label?: (Uint8Array|null);
}

/** Represents a Proto_Command. */
export class Proto_Command implements IProto_Command {

    /**
     * Constructs a new Proto_Command.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Command);

    /** Proto_Command command. */
    public command: Uint8Array;

    /** Proto_Command label. */
    public label: Uint8Array;

    /**
     * Creates a new Proto_Command instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Command instance
     */
    public static create(properties?: IProto_Command): Proto_Command;

    /**
     * Encodes the specified Proto_Command message. Does not implicitly {@link Proto_Command.verify|verify} messages.
     * @param message Proto_Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Command, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Command message, length delimited. Does not implicitly {@link Proto_Command.verify|verify} messages.
     * @param message Proto_Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Command, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Command message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Command;

    /**
     * Decodes a Proto_Command message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Command;

    /**
     * Verifies a Proto_Command message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Command message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Command
     */
    public static fromObject(object: { [k: string]: any }): Proto_Command;

    /**
     * Creates a plain object from a Proto_Command message. Also converts values to other types if specified.
     * @param message Proto_Command
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Command to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_RelationList. */
export interface IProto_RelationList {

    /** Proto_RelationList Relations */
    Relations?: (IProto_Relation[]|null);
}

/** Represents a Proto_RelationList. */
export class Proto_RelationList implements IProto_RelationList {

    /**
     * Constructs a new Proto_RelationList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_RelationList);

    /** Proto_RelationList Relations. */
    public Relations: IProto_Relation[];

    /**
     * Creates a new Proto_RelationList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_RelationList instance
     */
    public static create(properties?: IProto_RelationList): Proto_RelationList;

    /**
     * Encodes the specified Proto_RelationList message. Does not implicitly {@link Proto_RelationList.verify|verify} messages.
     * @param message Proto_RelationList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_RelationList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_RelationList message, length delimited. Does not implicitly {@link Proto_RelationList.verify|verify} messages.
     * @param message Proto_RelationList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_RelationList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_RelationList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_RelationList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_RelationList;

    /**
     * Decodes a Proto_RelationList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_RelationList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_RelationList;

    /**
     * Verifies a Proto_RelationList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_RelationList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_RelationList
     */
    public static fromObject(object: { [k: string]: any }): Proto_RelationList;

    /**
     * Creates a plain object from a Proto_RelationList message. Also converts values to other types if specified.
     * @param message Proto_RelationList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_RelationList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_RelationList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Relation. */
export interface IProto_Relation {

    /** Proto_Relation function */
    "function"?: (Uint8Array|null);

    /** Proto_Relation returnclassname */
    returnclassname?: (Uint8Array|null);

    /** Proto_Relation clientaccesstype */
    clientaccesstype?: (number|null);

    /** Proto_Relation StandardOrReleaseClass */
    StandardOrReleaseClass?: (number|null);
}

/** Represents a Proto_Relation. */
export class Proto_Relation implements IProto_Relation {

    /**
     * Constructs a new Proto_Relation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Relation);

    /** Proto_Relation function. */
    public function: Uint8Array;

    /** Proto_Relation returnclassname. */
    public returnclassname: Uint8Array;

    /** Proto_Relation clientaccesstype. */
    public clientaccesstype: number;

    /** Proto_Relation StandardOrReleaseClass. */
    public StandardOrReleaseClass: number;

    /**
     * Creates a new Proto_Relation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Relation instance
     */
    public static create(properties?: IProto_Relation): Proto_Relation;

    /**
     * Encodes the specified Proto_Relation message. Does not implicitly {@link Proto_Relation.verify|verify} messages.
     * @param message Proto_Relation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Relation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Relation message, length delimited. Does not implicitly {@link Proto_Relation.verify|verify} messages.
     * @param message Proto_Relation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Relation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Relation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Relation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Relation;

    /**
     * Decodes a Proto_Relation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Relation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Relation;

    /**
     * Verifies a Proto_Relation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Relation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Relation
     */
    public static fromObject(object: { [k: string]: any }): Proto_Relation;

    /**
     * Creates a plain object from a Proto_Relation message. Also converts values to other types if specified.
     * @param message Proto_Relation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Relation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Relation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ServerProbe. */
export interface IProto_ServerProbe {

    /** Proto_ServerProbe ServerCode */
    ServerCode?: (Uint8Array|null);

    /** Proto_ServerProbe Version */
    Version?: (Uint8Array|null);

    /** Proto_ServerProbe DomainState */
    DomainState?: (number|Long|null);

    /** Proto_ServerProbe Project */
    Project?: (Uint8Array|null);

    /** Proto_ServerProbe ProductName */
    ProductName?: (Uint8Array|null);

    /** Proto_ServerProbe PlatformVersion */
    PlatformVersion?: (Uint8Array|null);

    /** Proto_ServerProbe ProjectVersion */
    ProjectVersion?: (Uint8Array|null);

    /** Proto_ServerProbe ProductVersion */
    ProductVersion?: (Uint8Array|null);

    /** Proto_ServerProbe LicenseState */
    LicenseState?: (Uint8Array|null);

    /** Proto_ServerProbe ExpiredIn */
    ExpiredIn?: (number|Long|null);

    /** Proto_ServerProbe AuthenticationMode */
    AuthenticationMode?: (number|Long|null);

    /** Proto_ServerProbe ServerLabel */
    ServerLabel?: (Uint8Array|null);

    /** Proto_ServerProbe ServerICON */
    ServerICON?: (Uint8Array|null);

    /** Proto_ServerProbe serverinstanceid */
    serverinstanceid?: (number|null);

    /** Proto_ServerProbe UserCommandTimeout */
    UserCommandTimeout?: (number|null);

    /** Proto_ServerProbe PlatformTimeout */
    PlatformTimeout?: (number|null);

    /** Proto_ServerProbe BackgroudSyncInterval */
    BackgroudSyncInterval?: (number|null);

    /** Proto_ServerProbe ClusterState */
    ClusterState?: (number|null);

    /** Proto_ServerProbe DomainName */
    DomainName?: (Uint8Array|null);

    /** Proto_ServerProbe HostName */
    HostName?: (Uint8Array|null);

    /** Proto_ServerProbe BackupServer */
    BackupServer?: (Uint8Array|null);

    /** Proto_ServerProbe BackupRole */
    BackupRole?: (Uint8Array|null);

    /** Proto_ServerProbe APIVersion */
    APIVersion?: (number|null);

    /** Proto_ServerProbe ProtoFileVersion */
    ProtoFileVersion?: (number|null);

    /** Proto_ServerProbe HasProductTour */
    HasProductTour?: (number|null);

    /** Proto_ServerProbe HasDocumentation */
    HasDocumentation?: (number|null);
}

/** Represents a Proto_ServerProbe. */
export class Proto_ServerProbe implements IProto_ServerProbe {

    /**
     * Constructs a new Proto_ServerProbe.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ServerProbe);

    /** Proto_ServerProbe ServerCode. */
    public ServerCode: Uint8Array;

    /** Proto_ServerProbe Version. */
    public Version: Uint8Array;

    /** Proto_ServerProbe DomainState. */
    public DomainState: (number|Long);

    /** Proto_ServerProbe Project. */
    public Project: Uint8Array;

    /** Proto_ServerProbe ProductName. */
    public ProductName: Uint8Array;

    /** Proto_ServerProbe PlatformVersion. */
    public PlatformVersion: Uint8Array;

    /** Proto_ServerProbe ProjectVersion. */
    public ProjectVersion: Uint8Array;

    /** Proto_ServerProbe ProductVersion. */
    public ProductVersion: Uint8Array;

    /** Proto_ServerProbe LicenseState. */
    public LicenseState: Uint8Array;

    /** Proto_ServerProbe ExpiredIn. */
    public ExpiredIn: (number|Long);

    /** Proto_ServerProbe AuthenticationMode. */
    public AuthenticationMode: (number|Long);

    /** Proto_ServerProbe ServerLabel. */
    public ServerLabel: Uint8Array;

    /** Proto_ServerProbe ServerICON. */
    public ServerICON: Uint8Array;

    /** Proto_ServerProbe serverinstanceid. */
    public serverinstanceid: number;

    /** Proto_ServerProbe UserCommandTimeout. */
    public UserCommandTimeout: number;

    /** Proto_ServerProbe PlatformTimeout. */
    public PlatformTimeout: number;

    /** Proto_ServerProbe BackgroudSyncInterval. */
    public BackgroudSyncInterval: number;

    /** Proto_ServerProbe ClusterState. */
    public ClusterState: number;

    /** Proto_ServerProbe DomainName. */
    public DomainName: Uint8Array;

    /** Proto_ServerProbe HostName. */
    public HostName: Uint8Array;

    /** Proto_ServerProbe BackupServer. */
    public BackupServer: Uint8Array;

    /** Proto_ServerProbe BackupRole. */
    public BackupRole: Uint8Array;

    /** Proto_ServerProbe APIVersion. */
    public APIVersion: number;

    /** Proto_ServerProbe ProtoFileVersion. */
    public ProtoFileVersion: number;

    /** Proto_ServerProbe HasProductTour. */
    public HasProductTour: number;

    /** Proto_ServerProbe HasDocumentation. */
    public HasDocumentation: number;

    /**
     * Creates a new Proto_ServerProbe instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ServerProbe instance
     */
    public static create(properties?: IProto_ServerProbe): Proto_ServerProbe;

    /**
     * Encodes the specified Proto_ServerProbe message. Does not implicitly {@link Proto_ServerProbe.verify|verify} messages.
     * @param message Proto_ServerProbe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ServerProbe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ServerProbe message, length delimited. Does not implicitly {@link Proto_ServerProbe.verify|verify} messages.
     * @param message Proto_ServerProbe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ServerProbe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ServerProbe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ServerProbe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ServerProbe;

    /**
     * Decodes a Proto_ServerProbe message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ServerProbe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ServerProbe;

    /**
     * Verifies a Proto_ServerProbe message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ServerProbe message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ServerProbe
     */
    public static fromObject(object: { [k: string]: any }): Proto_ServerProbe;

    /**
     * Creates a plain object from a Proto_ServerProbe message. Also converts values to other types if specified.
     * @param message Proto_ServerProbe
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ServerProbe, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ServerProbe to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ExternalDataList. */
export interface IProto_ExternalDataList {

    /** Proto_ExternalDataList ExternalData */
    ExternalData?: (IProto_ExternalData[]|null);
}

/** Represents a Proto_ExternalDataList. */
export class Proto_ExternalDataList implements IProto_ExternalDataList {

    /**
     * Constructs a new Proto_ExternalDataList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ExternalDataList);

    /** Proto_ExternalDataList ExternalData. */
    public ExternalData: IProto_ExternalData[];

    /**
     * Creates a new Proto_ExternalDataList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ExternalDataList instance
     */
    public static create(properties?: IProto_ExternalDataList): Proto_ExternalDataList;

    /**
     * Encodes the specified Proto_ExternalDataList message. Does not implicitly {@link Proto_ExternalDataList.verify|verify} messages.
     * @param message Proto_ExternalDataList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ExternalDataList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ExternalDataList message, length delimited. Does not implicitly {@link Proto_ExternalDataList.verify|verify} messages.
     * @param message Proto_ExternalDataList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ExternalDataList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ExternalDataList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ExternalDataList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ExternalDataList;

    /**
     * Decodes a Proto_ExternalDataList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ExternalDataList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ExternalDataList;

    /**
     * Verifies a Proto_ExternalDataList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ExternalDataList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ExternalDataList
     */
    public static fromObject(object: { [k: string]: any }): Proto_ExternalDataList;

    /**
     * Creates a plain object from a Proto_ExternalDataList message. Also converts values to other types if specified.
     * @param message Proto_ExternalDataList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ExternalDataList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ExternalDataList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ExternalData. */
export interface IProto_ExternalData {

    /** Proto_ExternalData Path */
    Path?: (Uint8Array|null);

    /** Proto_ExternalData Type */
    Type?: (Uint8Array|null);

    /** Proto_ExternalData Name */
    Name?: (Uint8Array|null);

    /** Proto_ExternalData Data */
    Data?: (Uint8Array|null);

    /** Proto_ExternalData Label */
    Label?: (Uint8Array|null);

    /** Proto_ExternalData VersionID */
    VersionID?: (number|Long|null);

    /** Proto_ExternalData BaseVersionID */
    BaseVersionID?: (number|Long|null);

    /** Proto_ExternalData BaseVersionLevel */
    BaseVersionLevel?: (number|Long|null);

    /** Proto_ExternalData ModifiedBy */
    ModifiedBy?: (Uint8Array|null);

    /** Proto_ExternalData ModificationDate */
    ModificationDate?: (number|Long|null);

    /** Proto_ExternalData SourceDB */
    SourceDB?: (number|null);

    /** Proto_ExternalData GUITag */
    GUITag?: (Uint8Array|null);

    /** Proto_ExternalData ProcessTag */
    ProcessTag?: (Uint8Array|null);

    /** Proto_ExternalData ActionTag */
    ActionTag?: (Uint8Array|null);

    /** Proto_ExternalData DeletedFlag */
    DeletedFlag?: (number|null);

    /** Proto_ExternalData XML */
    XML?: (Uint8Array|null);

    /** Proto_ExternalData Image */
    Image?: (Uint8Array|null);

    /** Proto_ExternalData RelationInfo */
    RelationInfo?: (Uint8Array|null);

    /** Proto_ExternalData State */
    State?: (number|null);
}

/** Represents a Proto_ExternalData. */
export class Proto_ExternalData implements IProto_ExternalData {

    /**
     * Constructs a new Proto_ExternalData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ExternalData);

    /** Proto_ExternalData Path. */
    public Path: Uint8Array;

    /** Proto_ExternalData Type. */
    public Type: Uint8Array;

    /** Proto_ExternalData Name. */
    public Name: Uint8Array;

    /** Proto_ExternalData Data. */
    public Data: Uint8Array;

    /** Proto_ExternalData Label. */
    public Label: Uint8Array;

    /** Proto_ExternalData VersionID. */
    public VersionID: (number|Long);

    /** Proto_ExternalData BaseVersionID. */
    public BaseVersionID: (number|Long);

    /** Proto_ExternalData BaseVersionLevel. */
    public BaseVersionLevel: (number|Long);

    /** Proto_ExternalData ModifiedBy. */
    public ModifiedBy: Uint8Array;

    /** Proto_ExternalData ModificationDate. */
    public ModificationDate: (number|Long);

    /** Proto_ExternalData SourceDB. */
    public SourceDB: number;

    /** Proto_ExternalData GUITag. */
    public GUITag: Uint8Array;

    /** Proto_ExternalData ProcessTag. */
    public ProcessTag: Uint8Array;

    /** Proto_ExternalData ActionTag. */
    public ActionTag: Uint8Array;

    /** Proto_ExternalData DeletedFlag. */
    public DeletedFlag: number;

    /** Proto_ExternalData XML. */
    public XML: Uint8Array;

    /** Proto_ExternalData Image. */
    public Image: Uint8Array;

    /** Proto_ExternalData RelationInfo. */
    public RelationInfo: Uint8Array;

    /** Proto_ExternalData State. */
    public State: number;

    /**
     * Creates a new Proto_ExternalData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ExternalData instance
     */
    public static create(properties?: IProto_ExternalData): Proto_ExternalData;

    /**
     * Encodes the specified Proto_ExternalData message. Does not implicitly {@link Proto_ExternalData.verify|verify} messages.
     * @param message Proto_ExternalData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ExternalData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ExternalData message, length delimited. Does not implicitly {@link Proto_ExternalData.verify|verify} messages.
     * @param message Proto_ExternalData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ExternalData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ExternalData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ExternalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ExternalData;

    /**
     * Decodes a Proto_ExternalData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ExternalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ExternalData;

    /**
     * Verifies a Proto_ExternalData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ExternalData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ExternalData
     */
    public static fromObject(object: { [k: string]: any }): Proto_ExternalData;

    /**
     * Creates a plain object from a Proto_ExternalData message. Also converts values to other types if specified.
     * @param message Proto_ExternalData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ExternalData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ExternalData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_KeyStringMap. */
export interface IProto_KeyStringMap {

    /** Proto_KeyStringMap KeyStrings */
    KeyStrings?: (IProto_KeyString[]|null);

    /** Proto_KeyStringMap Language */
    Language?: (Uint8Array|null);
}

/** Represents a Proto_KeyStringMap. */
export class Proto_KeyStringMap implements IProto_KeyStringMap {

    /**
     * Constructs a new Proto_KeyStringMap.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_KeyStringMap);

    /** Proto_KeyStringMap KeyStrings. */
    public KeyStrings: IProto_KeyString[];

    /** Proto_KeyStringMap Language. */
    public Language: Uint8Array;

    /**
     * Creates a new Proto_KeyStringMap instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_KeyStringMap instance
     */
    public static create(properties?: IProto_KeyStringMap): Proto_KeyStringMap;

    /**
     * Encodes the specified Proto_KeyStringMap message. Does not implicitly {@link Proto_KeyStringMap.verify|verify} messages.
     * @param message Proto_KeyStringMap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_KeyStringMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_KeyStringMap message, length delimited. Does not implicitly {@link Proto_KeyStringMap.verify|verify} messages.
     * @param message Proto_KeyStringMap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_KeyStringMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_KeyStringMap message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_KeyStringMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_KeyStringMap;

    /**
     * Decodes a Proto_KeyStringMap message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_KeyStringMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_KeyStringMap;

    /**
     * Verifies a Proto_KeyStringMap message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_KeyStringMap message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_KeyStringMap
     */
    public static fromObject(object: { [k: string]: any }): Proto_KeyStringMap;

    /**
     * Creates a plain object from a Proto_KeyStringMap message. Also converts values to other types if specified.
     * @param message Proto_KeyStringMap
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_KeyStringMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_KeyStringMap to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_KeyString. */
export interface IProto_KeyString {

    /** Proto_KeyString Key */
    Key?: (Uint8Array|null);

    /** Proto_KeyString Text */
    Text?: (Uint8Array|null);
}

/** Represents a Proto_KeyString. */
export class Proto_KeyString implements IProto_KeyString {

    /**
     * Constructs a new Proto_KeyString.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_KeyString);

    /** Proto_KeyString Key. */
    public Key: Uint8Array;

    /** Proto_KeyString Text. */
    public Text: Uint8Array;

    /**
     * Creates a new Proto_KeyString instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_KeyString instance
     */
    public static create(properties?: IProto_KeyString): Proto_KeyString;

    /**
     * Encodes the specified Proto_KeyString message. Does not implicitly {@link Proto_KeyString.verify|verify} messages.
     * @param message Proto_KeyString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_KeyString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_KeyString message, length delimited. Does not implicitly {@link Proto_KeyString.verify|verify} messages.
     * @param message Proto_KeyString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_KeyString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_KeyString message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_KeyString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_KeyString;

    /**
     * Decodes a Proto_KeyString message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_KeyString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_KeyString;

    /**
     * Verifies a Proto_KeyString message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_KeyString message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_KeyString
     */
    public static fromObject(object: { [k: string]: any }): Proto_KeyString;

    /**
     * Creates a plain object from a Proto_KeyString message. Also converts values to other types if specified.
     * @param message Proto_KeyString
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_KeyString, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_KeyString to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Form. */
export interface IProto_Form {

    /** Proto_Form Fields */
    Fields?: (IProto_FormField[]|null);

    /** Proto_Form Row */
    Row?: (IProto_DataTableRow|null);
}

/** Represents a Proto_Form. */
export class Proto_Form implements IProto_Form {

    /**
     * Constructs a new Proto_Form.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Form);

    /** Proto_Form Fields. */
    public Fields: IProto_FormField[];

    /** Proto_Form Row. */
    public Row?: (IProto_DataTableRow|null);

    /**
     * Creates a new Proto_Form instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Form instance
     */
    public static create(properties?: IProto_Form): Proto_Form;

    /**
     * Encodes the specified Proto_Form message. Does not implicitly {@link Proto_Form.verify|verify} messages.
     * @param message Proto_Form message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Form, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Form message, length delimited. Does not implicitly {@link Proto_Form.verify|verify} messages.
     * @param message Proto_Form message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Form, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Form message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Form
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Form;

    /**
     * Decodes a Proto_Form message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Form
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Form;

    /**
     * Verifies a Proto_Form message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Form message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Form
     */
    public static fromObject(object: { [k: string]: any }): Proto_Form;

    /**
     * Creates a plain object from a Proto_Form message. Also converts values to other types if specified.
     * @param message Proto_Form
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Form, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Form to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_FormField. */
export interface IProto_FormField {

    /** Proto_FormField FieldName */
    FieldName?: (Uint8Array|null);

    /** Proto_FormField Visibility */
    Visibility?: (number|null);

    /** Proto_FormField IsMultipleSelection */
    IsMultipleSelection?: (boolean|null);

    /** Proto_FormField Options */
    Options?: (Uint8Array|null);

    /** Proto_FormField ErrorText */
    ErrorText?: (Uint8Array|null);
}

/** Represents a Proto_FormField. */
export class Proto_FormField implements IProto_FormField {

    /**
     * Constructs a new Proto_FormField.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_FormField);

    /** Proto_FormField FieldName. */
    public FieldName: Uint8Array;

    /** Proto_FormField Visibility. */
    public Visibility: number;

    /** Proto_FormField IsMultipleSelection. */
    public IsMultipleSelection: boolean;

    /** Proto_FormField Options. */
    public Options: Uint8Array;

    /** Proto_FormField ErrorText. */
    public ErrorText: Uint8Array;

    /**
     * Creates a new Proto_FormField instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_FormField instance
     */
    public static create(properties?: IProto_FormField): Proto_FormField;

    /**
     * Encodes the specified Proto_FormField message. Does not implicitly {@link Proto_FormField.verify|verify} messages.
     * @param message Proto_FormField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_FormField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_FormField message, length delimited. Does not implicitly {@link Proto_FormField.verify|verify} messages.
     * @param message Proto_FormField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_FormField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_FormField message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_FormField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_FormField;

    /**
     * Decodes a Proto_FormField message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_FormField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_FormField;

    /**
     * Verifies a Proto_FormField message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_FormField message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_FormField
     */
    public static fromObject(object: { [k: string]: any }): Proto_FormField;

    /**
     * Creates a plain object from a Proto_FormField message. Also converts values to other types if specified.
     * @param message Proto_FormField
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_FormField, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_FormField to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Model. */
export interface IProto_Model {

    /** Proto_Model iclclass */
    iclclass?: (IProto_Class[]|null);
}

/** Represents a Proto_Model. */
export class Proto_Model implements IProto_Model {

    /**
     * Constructs a new Proto_Model.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Model);

    /** Proto_Model iclclass. */
    public iclclass: IProto_Class[];

    /**
     * Creates a new Proto_Model instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Model instance
     */
    public static create(properties?: IProto_Model): Proto_Model;

    /**
     * Encodes the specified Proto_Model message. Does not implicitly {@link Proto_Model.verify|verify} messages.
     * @param message Proto_Model message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Model, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Model message, length delimited. Does not implicitly {@link Proto_Model.verify|verify} messages.
     * @param message Proto_Model message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Model, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Model message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Model
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Model;

    /**
     * Decodes a Proto_Model message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Model
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Model;

    /**
     * Verifies a Proto_Model message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Model message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Model
     */
    public static fromObject(object: { [k: string]: any }): Proto_Model;

    /**
     * Creates a plain object from a Proto_Model message. Also converts values to other types if specified.
     * @param message Proto_Model
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Model, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Model to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Class. */
export interface IProto_Class {

    /** Proto_Class classfield */
    classfield?: (IProto_ClassField[]|null);

    /** Proto_Class ClassName */
    ClassName?: (Uint8Array|null);

    /** Proto_Class CreationSource */
    CreationSource?: (number|null);

    /** Proto_Class ClassType */
    ClassType?: (number|null);

    /** Proto_Class GroupMemberClassName */
    GroupMemberClassName?: (Uint8Array|null);
}

/** Represents a Proto_Class. */
export class Proto_Class implements IProto_Class {

    /**
     * Constructs a new Proto_Class.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Class);

    /** Proto_Class classfield. */
    public classfield: IProto_ClassField[];

    /** Proto_Class ClassName. */
    public ClassName: Uint8Array;

    /** Proto_Class CreationSource. */
    public CreationSource: number;

    /** Proto_Class ClassType. */
    public ClassType: number;

    /** Proto_Class GroupMemberClassName. */
    public GroupMemberClassName: Uint8Array;

    /**
     * Creates a new Proto_Class instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Class instance
     */
    public static create(properties?: IProto_Class): Proto_Class;

    /**
     * Encodes the specified Proto_Class message. Does not implicitly {@link Proto_Class.verify|verify} messages.
     * @param message Proto_Class message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Class, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Class message, length delimited. Does not implicitly {@link Proto_Class.verify|verify} messages.
     * @param message Proto_Class message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Class, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Class message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Class
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Class;

    /**
     * Decodes a Proto_Class message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Class
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Class;

    /**
     * Verifies a Proto_Class message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Class message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Class
     */
    public static fromObject(object: { [k: string]: any }): Proto_Class;

    /**
     * Creates a plain object from a Proto_Class message. Also converts values to other types if specified.
     * @param message Proto_Class
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Class, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Class to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ClassField. */
export interface IProto_ClassField {

    /** Proto_ClassField FieldName */
    FieldName?: (Uint8Array|null);

    /** Proto_ClassField FieldIndex */
    FieldIndex?: (number|null);

    /** Proto_ClassField FieldType */
    FieldType?: (number|null);

    /** Proto_ClassField Tooltip */
    Tooltip?: (Uint8Array|null);

    /** Proto_ClassField DisplayFormat */
    DisplayFormat?: (Uint8Array|null);

    /** Proto_ClassField SubType */
    SubType?: (number|null);

    /** Proto_ClassField Editable */
    Editable?: (boolean|null);

    /** Proto_ClassField EditMask */
    EditMask?: (Uint8Array|null);

    /** Proto_ClassField Browsable */
    Browsable?: (boolean|null);

    /** Proto_ClassField ReturnClassName */
    ReturnClassName?: (Uint8Array|null);

    /** Proto_ClassField HasOptions */
    HasOptions?: (number|null);

    /** Proto_ClassField FieldClassName */
    FieldClassName?: (Uint8Array|null);

    /** Proto_ClassField WEBDisplayFormat */
    WEBDisplayFormat?: (Uint8Array|null);

    /** Proto_ClassField WEBEditMask */
    WEBEditMask?: (Uint8Array|null);

    /** Proto_ClassField IsPK */
    IsPK?: (boolean|null);

    /** Proto_ClassField IsOptional */
    IsOptional?: (boolean|null);

    /** Proto_ClassField CanBeUsedForGrouping */
    CanBeUsedForGrouping?: (boolean|null);

    /** Proto_ClassField HasObjectToolTip */
    HasObjectToolTip?: (boolean|null);
}

/** Represents a Proto_ClassField. */
export class Proto_ClassField implements IProto_ClassField {

    /**
     * Constructs a new Proto_ClassField.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ClassField);

    /** Proto_ClassField FieldName. */
    public FieldName: Uint8Array;

    /** Proto_ClassField FieldIndex. */
    public FieldIndex: number;

    /** Proto_ClassField FieldType. */
    public FieldType: number;

    /** Proto_ClassField Tooltip. */
    public Tooltip: Uint8Array;

    /** Proto_ClassField DisplayFormat. */
    public DisplayFormat: Uint8Array;

    /** Proto_ClassField SubType. */
    public SubType: number;

    /** Proto_ClassField Editable. */
    public Editable: boolean;

    /** Proto_ClassField EditMask. */
    public EditMask: Uint8Array;

    /** Proto_ClassField Browsable. */
    public Browsable: boolean;

    /** Proto_ClassField ReturnClassName. */
    public ReturnClassName: Uint8Array;

    /** Proto_ClassField HasOptions. */
    public HasOptions: number;

    /** Proto_ClassField FieldClassName. */
    public FieldClassName: Uint8Array;

    /** Proto_ClassField WEBDisplayFormat. */
    public WEBDisplayFormat: Uint8Array;

    /** Proto_ClassField WEBEditMask. */
    public WEBEditMask: Uint8Array;

    /** Proto_ClassField IsPK. */
    public IsPK: boolean;

    /** Proto_ClassField IsOptional. */
    public IsOptional: boolean;

    /** Proto_ClassField CanBeUsedForGrouping. */
    public CanBeUsedForGrouping: boolean;

    /** Proto_ClassField HasObjectToolTip. */
    public HasObjectToolTip: boolean;

    /**
     * Creates a new Proto_ClassField instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ClassField instance
     */
    public static create(properties?: IProto_ClassField): Proto_ClassField;

    /**
     * Encodes the specified Proto_ClassField message. Does not implicitly {@link Proto_ClassField.verify|verify} messages.
     * @param message Proto_ClassField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ClassField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ClassField message, length delimited. Does not implicitly {@link Proto_ClassField.verify|verify} messages.
     * @param message Proto_ClassField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ClassField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ClassField message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ClassField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ClassField;

    /**
     * Decodes a Proto_ClassField message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ClassField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ClassField;

    /**
     * Verifies a Proto_ClassField message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ClassField message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ClassField
     */
    public static fromObject(object: { [k: string]: any }): Proto_ClassField;

    /**
     * Creates a plain object from a Proto_ClassField message. Also converts values to other types if specified.
     * @param message Proto_ClassField
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ClassField, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ClassField to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataSetRequest. */
export interface IProto_DataSetRequest {

    /** Proto_DataSetRequest PreserveSequenceInfo */
    PreserveSequenceInfo?: (number|null);

    /** Proto_DataSetRequest relationrequest */
    relationrequest?: (IProto_DataRelationRequest[]|null);

    /** Proto_DataSetRequest filteritem */
    filteritem?: (IProto_GlobalFilterItem[]|null);
}

/** Represents a Proto_DataSetRequest. */
export class Proto_DataSetRequest implements IProto_DataSetRequest {

    /**
     * Constructs a new Proto_DataSetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataSetRequest);

    /** Proto_DataSetRequest PreserveSequenceInfo. */
    public PreserveSequenceInfo: number;

    /** Proto_DataSetRequest relationrequest. */
    public relationrequest: IProto_DataRelationRequest[];

    /** Proto_DataSetRequest filteritem. */
    public filteritem: IProto_GlobalFilterItem[];

    /**
     * Creates a new Proto_DataSetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataSetRequest instance
     */
    public static create(properties?: IProto_DataSetRequest): Proto_DataSetRequest;

    /**
     * Encodes the specified Proto_DataSetRequest message. Does not implicitly {@link Proto_DataSetRequest.verify|verify} messages.
     * @param message Proto_DataSetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataSetRequest message, length delimited. Does not implicitly {@link Proto_DataSetRequest.verify|verify} messages.
     * @param message Proto_DataSetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataSetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataSetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataSetRequest;

    /**
     * Decodes a Proto_DataSetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataSetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataSetRequest;

    /**
     * Verifies a Proto_DataSetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataSetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataSetRequest
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataSetRequest;

    /**
     * Creates a plain object from a Proto_DataSetRequest message. Also converts values to other types if specified.
     * @param message Proto_DataSetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataSetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilterItem. */
export interface IProto_GlobalFilterItem {

    /** Proto_GlobalFilterItem FilterField */
    FilterField?: (IProto_GlobalFilterField[]|null);

    /** Proto_GlobalFilterItem ExcludedRelations */
    ExcludedRelations?: (number[]|null);

    /** Proto_GlobalFilterItem IsNull */
    IsNull?: (boolean|null);

    /** Proto_GlobalFilterItem String_Unary */
    String_Unary?: (IProto_GlobalFilter_String_Unary|null);

    /** Proto_GlobalFilterItem String_Multiary */
    String_Multiary?: (IProto_GlobalFilter_String_Multiary|null);

    /** Proto_GlobalFilterItem Integer_Unary */
    Integer_Unary?: (IProto_GlobalFilter_Integer_Unary|null);

    /** Proto_GlobalFilterItem Integer_Binary */
    Integer_Binary?: (IProto_GlobalFilter_Integer_Binary|null);

    /** Proto_GlobalFilterItem Integer_Multiary */
    Integer_Multiary?: (IProto_GlobalFilter_Integer_Multiary|null);

    /** Proto_GlobalFilterItem Decimal_Unary */
    Decimal_Unary?: (IProto_GlobalFilter_Decimal_Unary|null);

    /** Proto_GlobalFilterItem Decimal_Binary */
    Decimal_Binary?: (IProto_GlobalFilter_Decimal_Binary|null);

    /** Proto_GlobalFilterItem Decimal_Multiary */
    Decimal_Multiary?: (IProto_GlobalFilter_Decimal_Multiary|null);

    /** Proto_GlobalFilterItem Datetime_Binary */
    Datetime_Binary?: (IProto_GlobalFilter_Datetime_Binary|null);

    /** Proto_GlobalFilterItem Datetime_Unary */
    Datetime_Unary?: (IProto_GlobalFilter_Datetime_Unary|null);
}

/** Represents a Proto_GlobalFilterItem. */
export class Proto_GlobalFilterItem implements IProto_GlobalFilterItem {

    /**
     * Constructs a new Proto_GlobalFilterItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilterItem);

    /** Proto_GlobalFilterItem FilterField. */
    public FilterField: IProto_GlobalFilterField[];

    /** Proto_GlobalFilterItem ExcludedRelations. */
    public ExcludedRelations: number[];

    /** Proto_GlobalFilterItem IsNull. */
    public IsNull?: (boolean|null);

    /** Proto_GlobalFilterItem String_Unary. */
    public String_Unary?: (IProto_GlobalFilter_String_Unary|null);

    /** Proto_GlobalFilterItem String_Multiary. */
    public String_Multiary?: (IProto_GlobalFilter_String_Multiary|null);

    /** Proto_GlobalFilterItem Integer_Unary. */
    public Integer_Unary?: (IProto_GlobalFilter_Integer_Unary|null);

    /** Proto_GlobalFilterItem Integer_Binary. */
    public Integer_Binary?: (IProto_GlobalFilter_Integer_Binary|null);

    /** Proto_GlobalFilterItem Integer_Multiary. */
    public Integer_Multiary?: (IProto_GlobalFilter_Integer_Multiary|null);

    /** Proto_GlobalFilterItem Decimal_Unary. */
    public Decimal_Unary?: (IProto_GlobalFilter_Decimal_Unary|null);

    /** Proto_GlobalFilterItem Decimal_Binary. */
    public Decimal_Binary?: (IProto_GlobalFilter_Decimal_Binary|null);

    /** Proto_GlobalFilterItem Decimal_Multiary. */
    public Decimal_Multiary?: (IProto_GlobalFilter_Decimal_Multiary|null);

    /** Proto_GlobalFilterItem Datetime_Binary. */
    public Datetime_Binary?: (IProto_GlobalFilter_Datetime_Binary|null);

    /** Proto_GlobalFilterItem Datetime_Unary. */
    public Datetime_Unary?: (IProto_GlobalFilter_Datetime_Unary|null);

    /** Proto_GlobalFilterItem FieldValue. */
    public FieldValue?: ("IsNull"|"String_Unary"|"String_Multiary"|"Integer_Unary"|"Integer_Binary"|"Integer_Multiary"|"Decimal_Unary"|"Decimal_Binary"|"Decimal_Multiary"|"Datetime_Binary"|"Datetime_Unary");

    /**
     * Creates a new Proto_GlobalFilterItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilterItem instance
     */
    public static create(properties?: IProto_GlobalFilterItem): Proto_GlobalFilterItem;

    /**
     * Encodes the specified Proto_GlobalFilterItem message. Does not implicitly {@link Proto_GlobalFilterItem.verify|verify} messages.
     * @param message Proto_GlobalFilterItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilterItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilterItem message, length delimited. Does not implicitly {@link Proto_GlobalFilterItem.verify|verify} messages.
     * @param message Proto_GlobalFilterItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilterItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilterItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilterItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilterItem;

    /**
     * Decodes a Proto_GlobalFilterItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilterItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilterItem;

    /**
     * Verifies a Proto_GlobalFilterItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilterItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilterItem
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilterItem;

    /**
     * Creates a plain object from a Proto_GlobalFilterItem message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilterItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilterItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilterItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilterField. */
export interface IProto_GlobalFilterField {

    /** Proto_GlobalFilterField ClassName */
    ClassName?: (Uint8Array|null);

    /** Proto_GlobalFilterField FieldName */
    FieldName?: (Uint8Array|null);
}

/** Represents a Proto_GlobalFilterField. */
export class Proto_GlobalFilterField implements IProto_GlobalFilterField {

    /**
     * Constructs a new Proto_GlobalFilterField.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilterField);

    /** Proto_GlobalFilterField ClassName. */
    public ClassName: Uint8Array;

    /** Proto_GlobalFilterField FieldName. */
    public FieldName: Uint8Array;

    /**
     * Creates a new Proto_GlobalFilterField instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilterField instance
     */
    public static create(properties?: IProto_GlobalFilterField): Proto_GlobalFilterField;

    /**
     * Encodes the specified Proto_GlobalFilterField message. Does not implicitly {@link Proto_GlobalFilterField.verify|verify} messages.
     * @param message Proto_GlobalFilterField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilterField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilterField message, length delimited. Does not implicitly {@link Proto_GlobalFilterField.verify|verify} messages.
     * @param message Proto_GlobalFilterField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilterField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilterField message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilterField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilterField;

    /**
     * Decodes a Proto_GlobalFilterField message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilterField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilterField;

    /**
     * Verifies a Proto_GlobalFilterField message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilterField message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilterField
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilterField;

    /**
     * Creates a plain object from a Proto_GlobalFilterField message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilterField
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilterField, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilterField to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_String_Unary. */
export interface IProto_GlobalFilter_String_Unary {

    /** Proto_GlobalFilter_String_Unary Operand */
    Operand?: (Uint8Array|null);

    /** Proto_GlobalFilter_String_Unary ICEquals */
    ICEquals?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary DoesNotEqual */
    DoesNotEqual?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary Contains */
    Contains?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary NotContains */
    NotContains?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary StartsWith */
    StartsWith?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary EndsWith */
    EndsWith?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary Like */
    Like?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary NotLike */
    NotLike?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_String_Unary. */
export class Proto_GlobalFilter_String_Unary implements IProto_GlobalFilter_String_Unary {

    /**
     * Constructs a new Proto_GlobalFilter_String_Unary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_String_Unary);

    /** Proto_GlobalFilter_String_Unary Operand. */
    public Operand: Uint8Array;

    /** Proto_GlobalFilter_String_Unary ICEquals. */
    public ICEquals?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary DoesNotEqual. */
    public DoesNotEqual?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary Contains. */
    public Contains?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary NotContains. */
    public NotContains?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary StartsWith. */
    public StartsWith?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary EndsWith. */
    public EndsWith?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary Like. */
    public Like?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary NotLike. */
    public NotLike?: (boolean|null);

    /** Proto_GlobalFilter_String_Unary Operator. */
    public Operator?: ("ICEquals"|"DoesNotEqual"|"Contains"|"NotContains"|"StartsWith"|"EndsWith"|"Like"|"NotLike");

    /**
     * Creates a new Proto_GlobalFilter_String_Unary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_String_Unary instance
     */
    public static create(properties?: IProto_GlobalFilter_String_Unary): Proto_GlobalFilter_String_Unary;

    /**
     * Encodes the specified Proto_GlobalFilter_String_Unary message. Does not implicitly {@link Proto_GlobalFilter_String_Unary.verify|verify} messages.
     * @param message Proto_GlobalFilter_String_Unary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_String_Unary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_String_Unary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_String_Unary.verify|verify} messages.
     * @param message Proto_GlobalFilter_String_Unary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_String_Unary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_String_Unary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_String_Unary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_String_Unary;

    /**
     * Decodes a Proto_GlobalFilter_String_Unary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_String_Unary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_String_Unary;

    /**
     * Verifies a Proto_GlobalFilter_String_Unary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_String_Unary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_String_Unary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_String_Unary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_String_Unary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_String_Unary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_String_Unary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_String_Unary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_String_Multiary. */
export interface IProto_GlobalFilter_String_Multiary {

    /** Proto_GlobalFilter_String_Multiary Operands */
    Operands?: (Uint8Array[]|null);

    /** Proto_GlobalFilter_String_Multiary In */
    In?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_String_Multiary. */
export class Proto_GlobalFilter_String_Multiary implements IProto_GlobalFilter_String_Multiary {

    /**
     * Constructs a new Proto_GlobalFilter_String_Multiary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_String_Multiary);

    /** Proto_GlobalFilter_String_Multiary Operands. */
    public Operands: Uint8Array[];

    /** Proto_GlobalFilter_String_Multiary In. */
    public In: boolean;

    /**
     * Creates a new Proto_GlobalFilter_String_Multiary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_String_Multiary instance
     */
    public static create(properties?: IProto_GlobalFilter_String_Multiary): Proto_GlobalFilter_String_Multiary;

    /**
     * Encodes the specified Proto_GlobalFilter_String_Multiary message. Does not implicitly {@link Proto_GlobalFilter_String_Multiary.verify|verify} messages.
     * @param message Proto_GlobalFilter_String_Multiary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_String_Multiary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_String_Multiary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_String_Multiary.verify|verify} messages.
     * @param message Proto_GlobalFilter_String_Multiary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_String_Multiary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_String_Multiary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_String_Multiary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_String_Multiary;

    /**
     * Decodes a Proto_GlobalFilter_String_Multiary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_String_Multiary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_String_Multiary;

    /**
     * Verifies a Proto_GlobalFilter_String_Multiary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_String_Multiary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_String_Multiary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_String_Multiary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_String_Multiary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_String_Multiary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_String_Multiary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_String_Multiary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_Integer_Unary. */
export interface IProto_GlobalFilter_Integer_Unary {

    /** Proto_GlobalFilter_Integer_Unary Operand */
    Operand?: (number|Long|null);

    /** Proto_GlobalFilter_Integer_Unary ICEquals */
    ICEquals?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary DoesNotEqual */
    DoesNotEqual?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary IsGreaterThan */
    IsGreaterThan?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary IsGreaterThanOrEqual */
    IsGreaterThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary IsLessThan */
    IsLessThan?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary IsLessThanOrEqual */
    IsLessThanOrEqual?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_Integer_Unary. */
export class Proto_GlobalFilter_Integer_Unary implements IProto_GlobalFilter_Integer_Unary {

    /**
     * Constructs a new Proto_GlobalFilter_Integer_Unary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_Integer_Unary);

    /** Proto_GlobalFilter_Integer_Unary Operand. */
    public Operand: (number|Long);

    /** Proto_GlobalFilter_Integer_Unary ICEquals. */
    public ICEquals?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary DoesNotEqual. */
    public DoesNotEqual?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary IsGreaterThan. */
    public IsGreaterThan?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary IsGreaterThanOrEqual. */
    public IsGreaterThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary IsLessThan. */
    public IsLessThan?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary IsLessThanOrEqual. */
    public IsLessThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Integer_Unary Operator. */
    public Operator?: ("ICEquals"|"DoesNotEqual"|"IsGreaterThan"|"IsGreaterThanOrEqual"|"IsLessThan"|"IsLessThanOrEqual");

    /**
     * Creates a new Proto_GlobalFilter_Integer_Unary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_Integer_Unary instance
     */
    public static create(properties?: IProto_GlobalFilter_Integer_Unary): Proto_GlobalFilter_Integer_Unary;

    /**
     * Encodes the specified Proto_GlobalFilter_Integer_Unary message. Does not implicitly {@link Proto_GlobalFilter_Integer_Unary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Integer_Unary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_Integer_Unary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_Integer_Unary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_Integer_Unary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Integer_Unary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_Integer_Unary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_Integer_Unary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_Integer_Unary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_Integer_Unary;

    /**
     * Decodes a Proto_GlobalFilter_Integer_Unary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_Integer_Unary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_Integer_Unary;

    /**
     * Verifies a Proto_GlobalFilter_Integer_Unary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_Integer_Unary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_Integer_Unary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_Integer_Unary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_Integer_Unary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_Integer_Unary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_Integer_Unary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_Integer_Unary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_Integer_Binary. */
export interface IProto_GlobalFilter_Integer_Binary {

    /** Proto_GlobalFilter_Integer_Binary LeftOperand */
    LeftOperand?: (number|Long|null);

    /** Proto_GlobalFilter_Integer_Binary RightOperand */
    RightOperand?: (number|Long|null);

    /** Proto_GlobalFilter_Integer_Binary IsBetween */
    IsBetween?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_Integer_Binary. */
export class Proto_GlobalFilter_Integer_Binary implements IProto_GlobalFilter_Integer_Binary {

    /**
     * Constructs a new Proto_GlobalFilter_Integer_Binary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_Integer_Binary);

    /** Proto_GlobalFilter_Integer_Binary LeftOperand. */
    public LeftOperand: (number|Long);

    /** Proto_GlobalFilter_Integer_Binary RightOperand. */
    public RightOperand: (number|Long);

    /** Proto_GlobalFilter_Integer_Binary IsBetween. */
    public IsBetween: boolean;

    /**
     * Creates a new Proto_GlobalFilter_Integer_Binary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_Integer_Binary instance
     */
    public static create(properties?: IProto_GlobalFilter_Integer_Binary): Proto_GlobalFilter_Integer_Binary;

    /**
     * Encodes the specified Proto_GlobalFilter_Integer_Binary message. Does not implicitly {@link Proto_GlobalFilter_Integer_Binary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Integer_Binary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_Integer_Binary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_Integer_Binary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_Integer_Binary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Integer_Binary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_Integer_Binary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_Integer_Binary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_Integer_Binary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_Integer_Binary;

    /**
     * Decodes a Proto_GlobalFilter_Integer_Binary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_Integer_Binary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_Integer_Binary;

    /**
     * Verifies a Proto_GlobalFilter_Integer_Binary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_Integer_Binary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_Integer_Binary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_Integer_Binary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_Integer_Binary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_Integer_Binary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_Integer_Binary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_Integer_Binary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_Integer_Multiary. */
export interface IProto_GlobalFilter_Integer_Multiary {

    /** Proto_GlobalFilter_Integer_Multiary Operands */
    Operands?: ((number|Long)[]|null);

    /** Proto_GlobalFilter_Integer_Multiary In */
    In?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_Integer_Multiary. */
export class Proto_GlobalFilter_Integer_Multiary implements IProto_GlobalFilter_Integer_Multiary {

    /**
     * Constructs a new Proto_GlobalFilter_Integer_Multiary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_Integer_Multiary);

    /** Proto_GlobalFilter_Integer_Multiary Operands. */
    public Operands: (number|Long)[];

    /** Proto_GlobalFilter_Integer_Multiary In. */
    public In: boolean;

    /**
     * Creates a new Proto_GlobalFilter_Integer_Multiary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_Integer_Multiary instance
     */
    public static create(properties?: IProto_GlobalFilter_Integer_Multiary): Proto_GlobalFilter_Integer_Multiary;

    /**
     * Encodes the specified Proto_GlobalFilter_Integer_Multiary message. Does not implicitly {@link Proto_GlobalFilter_Integer_Multiary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Integer_Multiary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_Integer_Multiary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_Integer_Multiary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_Integer_Multiary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Integer_Multiary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_Integer_Multiary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_Integer_Multiary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_Integer_Multiary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_Integer_Multiary;

    /**
     * Decodes a Proto_GlobalFilter_Integer_Multiary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_Integer_Multiary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_Integer_Multiary;

    /**
     * Verifies a Proto_GlobalFilter_Integer_Multiary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_Integer_Multiary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_Integer_Multiary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_Integer_Multiary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_Integer_Multiary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_Integer_Multiary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_Integer_Multiary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_Integer_Multiary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_Decimal_Unary. */
export interface IProto_GlobalFilter_Decimal_Unary {

    /** Proto_GlobalFilter_Decimal_Unary Operand */
    Operand?: (number|null);

    /** Proto_GlobalFilter_Decimal_Unary ICEquals */
    ICEquals?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary DoesNotEqual */
    DoesNotEqual?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary IsGreaterThan */
    IsGreaterThan?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary IsGreaterThanOrEqual */
    IsGreaterThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary IsLessThan */
    IsLessThan?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary IsLessThanOrEqual */
    IsLessThanOrEqual?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_Decimal_Unary. */
export class Proto_GlobalFilter_Decimal_Unary implements IProto_GlobalFilter_Decimal_Unary {

    /**
     * Constructs a new Proto_GlobalFilter_Decimal_Unary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_Decimal_Unary);

    /** Proto_GlobalFilter_Decimal_Unary Operand. */
    public Operand: number;

    /** Proto_GlobalFilter_Decimal_Unary ICEquals. */
    public ICEquals?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary DoesNotEqual. */
    public DoesNotEqual?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary IsGreaterThan. */
    public IsGreaterThan?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary IsGreaterThanOrEqual. */
    public IsGreaterThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary IsLessThan. */
    public IsLessThan?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary IsLessThanOrEqual. */
    public IsLessThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Decimal_Unary Operator. */
    public Operator?: ("ICEquals"|"DoesNotEqual"|"IsGreaterThan"|"IsGreaterThanOrEqual"|"IsLessThan"|"IsLessThanOrEqual");

    /**
     * Creates a new Proto_GlobalFilter_Decimal_Unary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_Decimal_Unary instance
     */
    public static create(properties?: IProto_GlobalFilter_Decimal_Unary): Proto_GlobalFilter_Decimal_Unary;

    /**
     * Encodes the specified Proto_GlobalFilter_Decimal_Unary message. Does not implicitly {@link Proto_GlobalFilter_Decimal_Unary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Decimal_Unary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_Decimal_Unary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_Decimal_Unary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_Decimal_Unary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Decimal_Unary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_Decimal_Unary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_Decimal_Unary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_Decimal_Unary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_Decimal_Unary;

    /**
     * Decodes a Proto_GlobalFilter_Decimal_Unary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_Decimal_Unary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_Decimal_Unary;

    /**
     * Verifies a Proto_GlobalFilter_Decimal_Unary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_Decimal_Unary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_Decimal_Unary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_Decimal_Unary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_Decimal_Unary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_Decimal_Unary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_Decimal_Unary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_Decimal_Unary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_Decimal_Binary. */
export interface IProto_GlobalFilter_Decimal_Binary {

    /** Proto_GlobalFilter_Decimal_Binary LeftOperand */
    LeftOperand?: (number|null);

    /** Proto_GlobalFilter_Decimal_Binary RightOperand */
    RightOperand?: (number|null);

    /** Proto_GlobalFilter_Decimal_Binary IsBetween */
    IsBetween?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_Decimal_Binary. */
export class Proto_GlobalFilter_Decimal_Binary implements IProto_GlobalFilter_Decimal_Binary {

    /**
     * Constructs a new Proto_GlobalFilter_Decimal_Binary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_Decimal_Binary);

    /** Proto_GlobalFilter_Decimal_Binary LeftOperand. */
    public LeftOperand: number;

    /** Proto_GlobalFilter_Decimal_Binary RightOperand. */
    public RightOperand: number;

    /** Proto_GlobalFilter_Decimal_Binary IsBetween. */
    public IsBetween: boolean;

    /**
     * Creates a new Proto_GlobalFilter_Decimal_Binary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_Decimal_Binary instance
     */
    public static create(properties?: IProto_GlobalFilter_Decimal_Binary): Proto_GlobalFilter_Decimal_Binary;

    /**
     * Encodes the specified Proto_GlobalFilter_Decimal_Binary message. Does not implicitly {@link Proto_GlobalFilter_Decimal_Binary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Decimal_Binary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_Decimal_Binary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_Decimal_Binary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_Decimal_Binary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Decimal_Binary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_Decimal_Binary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_Decimal_Binary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_Decimal_Binary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_Decimal_Binary;

    /**
     * Decodes a Proto_GlobalFilter_Decimal_Binary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_Decimal_Binary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_Decimal_Binary;

    /**
     * Verifies a Proto_GlobalFilter_Decimal_Binary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_Decimal_Binary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_Decimal_Binary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_Decimal_Binary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_Decimal_Binary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_Decimal_Binary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_Decimal_Binary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_Decimal_Binary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_Decimal_Multiary. */
export interface IProto_GlobalFilter_Decimal_Multiary {

    /** Proto_GlobalFilter_Decimal_Multiary Operands */
    Operands?: (number[]|null);

    /** Proto_GlobalFilter_Decimal_Multiary In */
    In?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_Decimal_Multiary. */
export class Proto_GlobalFilter_Decimal_Multiary implements IProto_GlobalFilter_Decimal_Multiary {

    /**
     * Constructs a new Proto_GlobalFilter_Decimal_Multiary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_Decimal_Multiary);

    /** Proto_GlobalFilter_Decimal_Multiary Operands. */
    public Operands: number[];

    /** Proto_GlobalFilter_Decimal_Multiary In. */
    public In: boolean;

    /**
     * Creates a new Proto_GlobalFilter_Decimal_Multiary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_Decimal_Multiary instance
     */
    public static create(properties?: IProto_GlobalFilter_Decimal_Multiary): Proto_GlobalFilter_Decimal_Multiary;

    /**
     * Encodes the specified Proto_GlobalFilter_Decimal_Multiary message. Does not implicitly {@link Proto_GlobalFilter_Decimal_Multiary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Decimal_Multiary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_Decimal_Multiary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_Decimal_Multiary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_Decimal_Multiary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Decimal_Multiary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_Decimal_Multiary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_Decimal_Multiary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_Decimal_Multiary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_Decimal_Multiary;

    /**
     * Decodes a Proto_GlobalFilter_Decimal_Multiary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_Decimal_Multiary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_Decimal_Multiary;

    /**
     * Verifies a Proto_GlobalFilter_Decimal_Multiary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_Decimal_Multiary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_Decimal_Multiary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_Decimal_Multiary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_Decimal_Multiary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_Decimal_Multiary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_Decimal_Multiary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_Decimal_Multiary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_Datetime_Unary. */
export interface IProto_GlobalFilter_Datetime_Unary {

    /** Proto_GlobalFilter_Datetime_Unary Operand */
    Operand?: (number|Long|null);

    /** Proto_GlobalFilter_Datetime_Unary ICEquals */
    ICEquals?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary DoesNotEqual */
    DoesNotEqual?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary IsGreaterThan */
    IsGreaterThan?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary IsGreaterThanOrEqual */
    IsGreaterThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary IsLessThan */
    IsLessThan?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary IsLessThanOrEqual */
    IsLessThanOrEqual?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_Datetime_Unary. */
export class Proto_GlobalFilter_Datetime_Unary implements IProto_GlobalFilter_Datetime_Unary {

    /**
     * Constructs a new Proto_GlobalFilter_Datetime_Unary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_Datetime_Unary);

    /** Proto_GlobalFilter_Datetime_Unary Operand. */
    public Operand: (number|Long);

    /** Proto_GlobalFilter_Datetime_Unary ICEquals. */
    public ICEquals?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary DoesNotEqual. */
    public DoesNotEqual?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary IsGreaterThan. */
    public IsGreaterThan?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary IsGreaterThanOrEqual. */
    public IsGreaterThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary IsLessThan. */
    public IsLessThan?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary IsLessThanOrEqual. */
    public IsLessThanOrEqual?: (boolean|null);

    /** Proto_GlobalFilter_Datetime_Unary Operator. */
    public Operator?: ("ICEquals"|"DoesNotEqual"|"IsGreaterThan"|"IsGreaterThanOrEqual"|"IsLessThan"|"IsLessThanOrEqual");

    /**
     * Creates a new Proto_GlobalFilter_Datetime_Unary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_Datetime_Unary instance
     */
    public static create(properties?: IProto_GlobalFilter_Datetime_Unary): Proto_GlobalFilter_Datetime_Unary;

    /**
     * Encodes the specified Proto_GlobalFilter_Datetime_Unary message. Does not implicitly {@link Proto_GlobalFilter_Datetime_Unary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Datetime_Unary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_Datetime_Unary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_Datetime_Unary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_Datetime_Unary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Datetime_Unary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_Datetime_Unary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_Datetime_Unary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_Datetime_Unary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_Datetime_Unary;

    /**
     * Decodes a Proto_GlobalFilter_Datetime_Unary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_Datetime_Unary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_Datetime_Unary;

    /**
     * Verifies a Proto_GlobalFilter_Datetime_Unary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_Datetime_Unary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_Datetime_Unary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_Datetime_Unary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_Datetime_Unary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_Datetime_Unary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_Datetime_Unary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_Datetime_Unary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GlobalFilter_Datetime_Binary. */
export interface IProto_GlobalFilter_Datetime_Binary {

    /** Proto_GlobalFilter_Datetime_Binary LeftOperand */
    LeftOperand?: (number|Long|null);

    /** Proto_GlobalFilter_Datetime_Binary RightOperand */
    RightOperand?: (number|Long|null);

    /** Proto_GlobalFilter_Datetime_Binary IsBetween */
    IsBetween?: (boolean|null);
}

/** Represents a Proto_GlobalFilter_Datetime_Binary. */
export class Proto_GlobalFilter_Datetime_Binary implements IProto_GlobalFilter_Datetime_Binary {

    /**
     * Constructs a new Proto_GlobalFilter_Datetime_Binary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GlobalFilter_Datetime_Binary);

    /** Proto_GlobalFilter_Datetime_Binary LeftOperand. */
    public LeftOperand: (number|Long);

    /** Proto_GlobalFilter_Datetime_Binary RightOperand. */
    public RightOperand: (number|Long);

    /** Proto_GlobalFilter_Datetime_Binary IsBetween. */
    public IsBetween: boolean;

    /**
     * Creates a new Proto_GlobalFilter_Datetime_Binary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GlobalFilter_Datetime_Binary instance
     */
    public static create(properties?: IProto_GlobalFilter_Datetime_Binary): Proto_GlobalFilter_Datetime_Binary;

    /**
     * Encodes the specified Proto_GlobalFilter_Datetime_Binary message. Does not implicitly {@link Proto_GlobalFilter_Datetime_Binary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Datetime_Binary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GlobalFilter_Datetime_Binary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GlobalFilter_Datetime_Binary message, length delimited. Does not implicitly {@link Proto_GlobalFilter_Datetime_Binary.verify|verify} messages.
     * @param message Proto_GlobalFilter_Datetime_Binary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GlobalFilter_Datetime_Binary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GlobalFilter_Datetime_Binary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GlobalFilter_Datetime_Binary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GlobalFilter_Datetime_Binary;

    /**
     * Decodes a Proto_GlobalFilter_Datetime_Binary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GlobalFilter_Datetime_Binary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GlobalFilter_Datetime_Binary;

    /**
     * Verifies a Proto_GlobalFilter_Datetime_Binary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GlobalFilter_Datetime_Binary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GlobalFilter_Datetime_Binary
     */
    public static fromObject(object: { [k: string]: any }): Proto_GlobalFilter_Datetime_Binary;

    /**
     * Creates a plain object from a Proto_GlobalFilter_Datetime_Binary message. Also converts values to other types if specified.
     * @param message Proto_GlobalFilter_Datetime_Binary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GlobalFilter_Datetime_Binary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GlobalFilter_Datetime_Binary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataRelationRequest. */
export interface IProto_DataRelationRequest {

    /** Proto_DataRelationRequest RelationRequestID */
    RelationRequestID?: (number|null);

    /** Proto_DataRelationRequest relation */
    relation?: (Uint8Array|null);

    /** Proto_DataRelationRequest parentclassname */
    parentclassname?: (Uint8Array|null);

    /** Proto_DataRelationRequest parent */
    parent?: (IProto_RelationParent[]|null);

    /** Proto_DataRelationRequest parentPKColumn */
    parentPKColumn?: (IProto_DTSchemaColumn[]|null);

    /** Proto_DataRelationRequest SelectedGroupType */
    SelectedGroupType?: (Uint8Array|null);

    /** Proto_DataRelationRequest IncludeGroupTypesInResponse */
    IncludeGroupTypesInResponse?: (boolean|null);

    /** Proto_DataRelationRequest function */
    "function"?: (Uint8Array[]|null);

    /** Proto_DataRelationRequest DistinctByField */
    DistinctByField?: (Uint8Array[]|null);
}

/** Represents a Proto_DataRelationRequest. */
export class Proto_DataRelationRequest implements IProto_DataRelationRequest {

    /**
     * Constructs a new Proto_DataRelationRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataRelationRequest);

    /** Proto_DataRelationRequest RelationRequestID. */
    public RelationRequestID: number;

    /** Proto_DataRelationRequest relation. */
    public relation: Uint8Array;

    /** Proto_DataRelationRequest parentclassname. */
    public parentclassname: Uint8Array;

    /** Proto_DataRelationRequest parent. */
    public parent: IProto_RelationParent[];

    /** Proto_DataRelationRequest parentPKColumn. */
    public parentPKColumn: IProto_DTSchemaColumn[];

    /** Proto_DataRelationRequest SelectedGroupType. */
    public SelectedGroupType: Uint8Array;

    /** Proto_DataRelationRequest IncludeGroupTypesInResponse. */
    public IncludeGroupTypesInResponse: boolean;

    /** Proto_DataRelationRequest function. */
    public function: Uint8Array[];

    /** Proto_DataRelationRequest DistinctByField. */
    public DistinctByField: Uint8Array[];

    /**
     * Creates a new Proto_DataRelationRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataRelationRequest instance
     */
    public static create(properties?: IProto_DataRelationRequest): Proto_DataRelationRequest;

    /**
     * Encodes the specified Proto_DataRelationRequest message. Does not implicitly {@link Proto_DataRelationRequest.verify|verify} messages.
     * @param message Proto_DataRelationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataRelationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataRelationRequest message, length delimited. Does not implicitly {@link Proto_DataRelationRequest.verify|verify} messages.
     * @param message Proto_DataRelationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataRelationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataRelationRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataRelationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataRelationRequest;

    /**
     * Decodes a Proto_DataRelationRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataRelationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataRelationRequest;

    /**
     * Verifies a Proto_DataRelationRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataRelationRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataRelationRequest
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataRelationRequest;

    /**
     * Creates a plain object from a Proto_DataRelationRequest message. Also converts values to other types if specified.
     * @param message Proto_DataRelationRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataRelationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataRelationRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_RelationParent. */
export interface IProto_RelationParent {

    /** Proto_RelationParent ParentReferenceID */
    ParentReferenceID?: ((number|Long)[]|null);

    /** Proto_RelationParent ExistingObject */
    ExistingObject?: (IProto_ExistingObject[]|null);

    /** Proto_RelationParent PKRow */
    PKRow?: (IProto_DataTableRow[]|null);
}

/** Represents a Proto_RelationParent. */
export class Proto_RelationParent implements IProto_RelationParent {

    /**
     * Constructs a new Proto_RelationParent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_RelationParent);

    /** Proto_RelationParent ParentReferenceID. */
    public ParentReferenceID: (number|Long)[];

    /** Proto_RelationParent ExistingObject. */
    public ExistingObject: IProto_ExistingObject[];

    /** Proto_RelationParent PKRow. */
    public PKRow: IProto_DataTableRow[];

    /**
     * Creates a new Proto_RelationParent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_RelationParent instance
     */
    public static create(properties?: IProto_RelationParent): Proto_RelationParent;

    /**
     * Encodes the specified Proto_RelationParent message. Does not implicitly {@link Proto_RelationParent.verify|verify} messages.
     * @param message Proto_RelationParent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_RelationParent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_RelationParent message, length delimited. Does not implicitly {@link Proto_RelationParent.verify|verify} messages.
     * @param message Proto_RelationParent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_RelationParent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_RelationParent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_RelationParent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_RelationParent;

    /**
     * Decodes a Proto_RelationParent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_RelationParent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_RelationParent;

    /**
     * Verifies a Proto_RelationParent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_RelationParent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_RelationParent
     */
    public static fromObject(object: { [k: string]: any }): Proto_RelationParent;

    /**
     * Creates a plain object from a Proto_RelationParent message. Also converts values to other types if specified.
     * @param message Proto_RelationParent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_RelationParent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_RelationParent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_ExistingObject. */
export interface IProto_ExistingObject {

    /** Proto_ExistingObject ReferenceID */
    ReferenceID?: (number|Long|null);

    /** Proto_ExistingObject RevisionInfo */
    RevisionInfo?: (Uint8Array|null);
}

/** Represents a Proto_ExistingObject. */
export class Proto_ExistingObject implements IProto_ExistingObject {

    /**
     * Constructs a new Proto_ExistingObject.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_ExistingObject);

    /** Proto_ExistingObject ReferenceID. */
    public ReferenceID: (number|Long);

    /** Proto_ExistingObject RevisionInfo. */
    public RevisionInfo: Uint8Array;

    /**
     * Creates a new Proto_ExistingObject instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_ExistingObject instance
     */
    public static create(properties?: IProto_ExistingObject): Proto_ExistingObject;

    /**
     * Encodes the specified Proto_ExistingObject message. Does not implicitly {@link Proto_ExistingObject.verify|verify} messages.
     * @param message Proto_ExistingObject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_ExistingObject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_ExistingObject message, length delimited. Does not implicitly {@link Proto_ExistingObject.verify|verify} messages.
     * @param message Proto_ExistingObject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_ExistingObject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_ExistingObject message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_ExistingObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_ExistingObject;

    /**
     * Decodes a Proto_ExistingObject message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_ExistingObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_ExistingObject;

    /**
     * Verifies a Proto_ExistingObject message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_ExistingObject message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_ExistingObject
     */
    public static fromObject(object: { [k: string]: any }): Proto_ExistingObject;

    /**
     * Creates a plain object from a Proto_ExistingObject message. Also converts values to other types if specified.
     * @param message Proto_ExistingObject
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_ExistingObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_ExistingObject to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataSetResponse. */
export interface IProto_DataSetResponse {

    /** Proto_DataSetResponse relationresponse */
    relationresponse?: (IProto_DataSetRelationResponse[]|null);

    /** Proto_DataSetResponse ModelRevisionNo */
    ModelRevisionNo?: (number|Long|null);

    /** Proto_DataSetResponse CachedString */
    CachedString?: (Uint8Array[]|null);
}

/** Represents a Proto_DataSetResponse. */
export class Proto_DataSetResponse implements IProto_DataSetResponse {

    /**
     * Constructs a new Proto_DataSetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataSetResponse);

    /** Proto_DataSetResponse relationresponse. */
    public relationresponse: IProto_DataSetRelationResponse[];

    /** Proto_DataSetResponse ModelRevisionNo. */
    public ModelRevisionNo: (number|Long);

    /** Proto_DataSetResponse CachedString. */
    public CachedString: Uint8Array[];

    /**
     * Creates a new Proto_DataSetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataSetResponse instance
     */
    public static create(properties?: IProto_DataSetResponse): Proto_DataSetResponse;

    /**
     * Encodes the specified Proto_DataSetResponse message. Does not implicitly {@link Proto_DataSetResponse.verify|verify} messages.
     * @param message Proto_DataSetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataSetResponse message, length delimited. Does not implicitly {@link Proto_DataSetResponse.verify|verify} messages.
     * @param message Proto_DataSetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataSetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataSetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataSetResponse;

    /**
     * Decodes a Proto_DataSetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataSetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataSetResponse;

    /**
     * Verifies a Proto_DataSetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataSetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataSetResponse
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataSetResponse;

    /**
     * Creates a plain object from a Proto_DataSetResponse message. Also converts values to other types if specified.
     * @param message Proto_DataSetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataSetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataSetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataSetRelationResponse. */
export interface IProto_DataSetRelationResponse {

    /** Proto_DataSetRelationResponse RelationRequestID */
    RelationRequestID?: (number|null);

    /** Proto_DataSetRelationResponse rowobjectclassname */
    rowobjectclassname?: (Uint8Array|null);

    /** Proto_DataSetRelationResponse lastrevisioninfo */
    lastrevisioninfo?: (Uint8Array|null);

    /** Proto_DataSetRelationResponse SelectedGroupType */
    SelectedGroupType?: (Uint8Array|null);

    /** Proto_DataSetRelationResponse GroupType */
    GroupType?: (IProto_GroupType[]|null);

    /** Proto_DataSetRelationResponse column */
    column?: (IProto_DataSetRelationResponseColumn[]|null);

    /** Proto_DataSetRelationResponse table */
    table?: (IProto_DataSetRelationResponseTable[]|null);
}

/** Represents a Proto_DataSetRelationResponse. */
export class Proto_DataSetRelationResponse implements IProto_DataSetRelationResponse {

    /**
     * Constructs a new Proto_DataSetRelationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataSetRelationResponse);

    /** Proto_DataSetRelationResponse RelationRequestID. */
    public RelationRequestID: number;

    /** Proto_DataSetRelationResponse rowobjectclassname. */
    public rowobjectclassname: Uint8Array;

    /** Proto_DataSetRelationResponse lastrevisioninfo. */
    public lastrevisioninfo: Uint8Array;

    /** Proto_DataSetRelationResponse SelectedGroupType. */
    public SelectedGroupType: Uint8Array;

    /** Proto_DataSetRelationResponse GroupType. */
    public GroupType: IProto_GroupType[];

    /** Proto_DataSetRelationResponse column. */
    public column: IProto_DataSetRelationResponseColumn[];

    /** Proto_DataSetRelationResponse table. */
    public table: IProto_DataSetRelationResponseTable[];

    /**
     * Creates a new Proto_DataSetRelationResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataSetRelationResponse instance
     */
    public static create(properties?: IProto_DataSetRelationResponse): Proto_DataSetRelationResponse;

    /**
     * Encodes the specified Proto_DataSetRelationResponse message. Does not implicitly {@link Proto_DataSetRelationResponse.verify|verify} messages.
     * @param message Proto_DataSetRelationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataSetRelationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataSetRelationResponse message, length delimited. Does not implicitly {@link Proto_DataSetRelationResponse.verify|verify} messages.
     * @param message Proto_DataSetRelationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataSetRelationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataSetRelationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataSetRelationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataSetRelationResponse;

    /**
     * Decodes a Proto_DataSetRelationResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataSetRelationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataSetRelationResponse;

    /**
     * Verifies a Proto_DataSetRelationResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataSetRelationResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataSetRelationResponse
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataSetRelationResponse;

    /**
     * Creates a plain object from a Proto_DataSetRelationResponse message. Also converts values to other types if specified.
     * @param message Proto_DataSetRelationResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataSetRelationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataSetRelationResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GroupType. */
export interface IProto_GroupType {

    /** Proto_GroupType GroupType */
    GroupType?: (Uint8Array|null);

    /** Proto_GroupType Description */
    Description?: (Uint8Array|null);

    /** Proto_GroupType KeyFunctions */
    KeyFunctions?: (Uint8Array|null);

    /** Proto_GroupType FilterExpression */
    FilterExpression?: (Uint8Array|null);

    /** Proto_GroupType Error */
    Error?: (Uint8Array|null);

    /** Proto_GroupType CanDelete */
    CanDelete?: (boolean|null);

    /** Proto_GroupType CanEdit */
    CanEdit?: (boolean|null);

    /** Proto_GroupType State */
    State?: (number|null);
}

/** Represents a Proto_GroupType. */
export class Proto_GroupType implements IProto_GroupType {

    /**
     * Constructs a new Proto_GroupType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GroupType);

    /** Proto_GroupType GroupType. */
    public GroupType: Uint8Array;

    /** Proto_GroupType Description. */
    public Description: Uint8Array;

    /** Proto_GroupType KeyFunctions. */
    public KeyFunctions: Uint8Array;

    /** Proto_GroupType FilterExpression. */
    public FilterExpression: Uint8Array;

    /** Proto_GroupType Error. */
    public Error: Uint8Array;

    /** Proto_GroupType CanDelete. */
    public CanDelete: boolean;

    /** Proto_GroupType CanEdit. */
    public CanEdit: boolean;

    /** Proto_GroupType State. */
    public State: number;

    /**
     * Creates a new Proto_GroupType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GroupType instance
     */
    public static create(properties?: IProto_GroupType): Proto_GroupType;

    /**
     * Encodes the specified Proto_GroupType message. Does not implicitly {@link Proto_GroupType.verify|verify} messages.
     * @param message Proto_GroupType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GroupType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GroupType message, length delimited. Does not implicitly {@link Proto_GroupType.verify|verify} messages.
     * @param message Proto_GroupType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GroupType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GroupType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GroupType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GroupType;

    /**
     * Decodes a Proto_GroupType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GroupType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GroupType;

    /**
     * Verifies a Proto_GroupType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GroupType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GroupType
     */
    public static fromObject(object: { [k: string]: any }): Proto_GroupType;

    /**
     * Creates a plain object from a Proto_GroupType message. Also converts values to other types if specified.
     * @param message Proto_GroupType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GroupType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GroupType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataSetRelationResponseColumn. */
export interface IProto_DataSetRelationResponseColumn {

    /** Proto_DataSetRelationResponseColumn code */
    code?: (Uint8Array|null);

    /** Proto_DataSetRelationResponseColumn accesstype */
    accesstype?: (number|null);
}

/** Represents a Proto_DataSetRelationResponseColumn. */
export class Proto_DataSetRelationResponseColumn implements IProto_DataSetRelationResponseColumn {

    /**
     * Constructs a new Proto_DataSetRelationResponseColumn.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataSetRelationResponseColumn);

    /** Proto_DataSetRelationResponseColumn code. */
    public code: Uint8Array;

    /** Proto_DataSetRelationResponseColumn accesstype. */
    public accesstype: number;

    /**
     * Creates a new Proto_DataSetRelationResponseColumn instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataSetRelationResponseColumn instance
     */
    public static create(properties?: IProto_DataSetRelationResponseColumn): Proto_DataSetRelationResponseColumn;

    /**
     * Encodes the specified Proto_DataSetRelationResponseColumn message. Does not implicitly {@link Proto_DataSetRelationResponseColumn.verify|verify} messages.
     * @param message Proto_DataSetRelationResponseColumn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataSetRelationResponseColumn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataSetRelationResponseColumn message, length delimited. Does not implicitly {@link Proto_DataSetRelationResponseColumn.verify|verify} messages.
     * @param message Proto_DataSetRelationResponseColumn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataSetRelationResponseColumn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataSetRelationResponseColumn message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataSetRelationResponseColumn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataSetRelationResponseColumn;

    /**
     * Decodes a Proto_DataSetRelationResponseColumn message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataSetRelationResponseColumn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataSetRelationResponseColumn;

    /**
     * Verifies a Proto_DataSetRelationResponseColumn message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataSetRelationResponseColumn message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataSetRelationResponseColumn
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataSetRelationResponseColumn;

    /**
     * Creates a plain object from a Proto_DataSetRelationResponseColumn message. Also converts values to other types if specified.
     * @param message Proto_DataSetRelationResponseColumn
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataSetRelationResponseColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataSetRelationResponseColumn to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataSetRelationResponseTable. */
export interface IProto_DataSetRelationResponseTable {

    /** Proto_DataSetRelationResponseTable ParentReferenceID */
    ParentReferenceID?: ((number|Long)[]|null);

    /** Proto_DataSetRelationResponseTable row */
    row?: (IProto_DataSetRelationResponseRow[]|null);
}

/** Represents a Proto_DataSetRelationResponseTable. */
export class Proto_DataSetRelationResponseTable implements IProto_DataSetRelationResponseTable {

    /**
     * Constructs a new Proto_DataSetRelationResponseTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataSetRelationResponseTable);

    /** Proto_DataSetRelationResponseTable ParentReferenceID. */
    public ParentReferenceID: (number|Long)[];

    /** Proto_DataSetRelationResponseTable row. */
    public row: IProto_DataSetRelationResponseRow[];

    /**
     * Creates a new Proto_DataSetRelationResponseTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataSetRelationResponseTable instance
     */
    public static create(properties?: IProto_DataSetRelationResponseTable): Proto_DataSetRelationResponseTable;

    /**
     * Encodes the specified Proto_DataSetRelationResponseTable message. Does not implicitly {@link Proto_DataSetRelationResponseTable.verify|verify} messages.
     * @param message Proto_DataSetRelationResponseTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataSetRelationResponseTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataSetRelationResponseTable message, length delimited. Does not implicitly {@link Proto_DataSetRelationResponseTable.verify|verify} messages.
     * @param message Proto_DataSetRelationResponseTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataSetRelationResponseTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataSetRelationResponseTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataSetRelationResponseTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataSetRelationResponseTable;

    /**
     * Decodes a Proto_DataSetRelationResponseTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataSetRelationResponseTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataSetRelationResponseTable;

    /**
     * Verifies a Proto_DataSetRelationResponseTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataSetRelationResponseTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataSetRelationResponseTable
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataSetRelationResponseTable;

    /**
     * Creates a plain object from a Proto_DataSetRelationResponseTable message. Also converts values to other types if specified.
     * @param message Proto_DataSetRelationResponseTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataSetRelationResponseTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataSetRelationResponseTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_DataSetRelationResponseRow. */
export interface IProto_DataSetRelationResponseRow {

    /** Proto_DataSetRelationResponseRow RowObjectReferenceID */
    RowObjectReferenceID?: (number|Long|null);

    /** Proto_DataSetRelationResponseRow Status */
    Status?: (number|null);

    /** Proto_DataSetRelationResponseRow Sequence */
    Sequence?: (number|null);

    /** Proto_DataSetRelationResponseRow IsRW */
    IsRW?: (boolean|null);

    /** Proto_DataSetRelationResponseRow value */
    value?: (IProto_DataTableValue[]|null);

    /** Proto_DataSetRelationResponseRow RowObjectDBID */
    RowObjectDBID?: (number|Long|null);

    /** Proto_DataSetRelationResponseRow RowObjectRevisionInfo */
    RowObjectRevisionInfo?: (Uint8Array|null);
}

/** Represents a Proto_DataSetRelationResponseRow. */
export class Proto_DataSetRelationResponseRow implements IProto_DataSetRelationResponseRow {

    /**
     * Constructs a new Proto_DataSetRelationResponseRow.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_DataSetRelationResponseRow);

    /** Proto_DataSetRelationResponseRow RowObjectReferenceID. */
    public RowObjectReferenceID: (number|Long);

    /** Proto_DataSetRelationResponseRow Status. */
    public Status: number;

    /** Proto_DataSetRelationResponseRow Sequence. */
    public Sequence: number;

    /** Proto_DataSetRelationResponseRow IsRW. */
    public IsRW: boolean;

    /** Proto_DataSetRelationResponseRow value. */
    public value: IProto_DataTableValue[];

    /** Proto_DataSetRelationResponseRow RowObjectDBID. */
    public RowObjectDBID: (number|Long);

    /** Proto_DataSetRelationResponseRow RowObjectRevisionInfo. */
    public RowObjectRevisionInfo: Uint8Array;

    /**
     * Creates a new Proto_DataSetRelationResponseRow instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_DataSetRelationResponseRow instance
     */
    public static create(properties?: IProto_DataSetRelationResponseRow): Proto_DataSetRelationResponseRow;

    /**
     * Encodes the specified Proto_DataSetRelationResponseRow message. Does not implicitly {@link Proto_DataSetRelationResponseRow.verify|verify} messages.
     * @param message Proto_DataSetRelationResponseRow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_DataSetRelationResponseRow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_DataSetRelationResponseRow message, length delimited. Does not implicitly {@link Proto_DataSetRelationResponseRow.verify|verify} messages.
     * @param message Proto_DataSetRelationResponseRow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_DataSetRelationResponseRow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_DataSetRelationResponseRow message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_DataSetRelationResponseRow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_DataSetRelationResponseRow;

    /**
     * Decodes a Proto_DataSetRelationResponseRow message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_DataSetRelationResponseRow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_DataSetRelationResponseRow;

    /**
     * Verifies a Proto_DataSetRelationResponseRow message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_DataSetRelationResponseRow message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_DataSetRelationResponseRow
     */
    public static fromObject(object: { [k: string]: any }): Proto_DataSetRelationResponseRow;

    /**
     * Creates a plain object from a Proto_DataSetRelationResponseRow message. Also converts values to other types if specified.
     * @param message Proto_DataSetRelationResponseRow
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_DataSetRelationResponseRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_DataSetRelationResponseRow to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GSAMS_ParseExpression. */
export interface IProto_GSAMS_ParseExpression {

    /** Proto_GSAMS_ParseExpression ClassName */
    ClassName?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression Expression */
    Expression?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression ReturnTypeOption */
    ReturnTypeOption?: (number|null);

    /** Proto_GSAMS_ParseExpression IsPartialExpression */
    IsPartialExpression?: (boolean|null);

    /** Proto_GSAMS_ParseExpression SuggestionLimit */
    SuggestionLimit?: (number|null);
}

/** Represents a Proto_GSAMS_ParseExpression. */
export class Proto_GSAMS_ParseExpression implements IProto_GSAMS_ParseExpression {

    /**
     * Constructs a new Proto_GSAMS_ParseExpression.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GSAMS_ParseExpression);

    /** Proto_GSAMS_ParseExpression ClassName. */
    public ClassName: Uint8Array;

    /** Proto_GSAMS_ParseExpression Expression. */
    public Expression: Uint8Array;

    /** Proto_GSAMS_ParseExpression ReturnTypeOption. */
    public ReturnTypeOption: number;

    /** Proto_GSAMS_ParseExpression IsPartialExpression. */
    public IsPartialExpression: boolean;

    /** Proto_GSAMS_ParseExpression SuggestionLimit. */
    public SuggestionLimit: number;

    /**
     * Creates a new Proto_GSAMS_ParseExpression instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GSAMS_ParseExpression instance
     */
    public static create(properties?: IProto_GSAMS_ParseExpression): Proto_GSAMS_ParseExpression;

    /**
     * Encodes the specified Proto_GSAMS_ParseExpression message. Does not implicitly {@link Proto_GSAMS_ParseExpression.verify|verify} messages.
     * @param message Proto_GSAMS_ParseExpression message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GSAMS_ParseExpression, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GSAMS_ParseExpression message, length delimited. Does not implicitly {@link Proto_GSAMS_ParseExpression.verify|verify} messages.
     * @param message Proto_GSAMS_ParseExpression message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GSAMS_ParseExpression, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GSAMS_ParseExpression message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GSAMS_ParseExpression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GSAMS_ParseExpression;

    /**
     * Decodes a Proto_GSAMS_ParseExpression message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GSAMS_ParseExpression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GSAMS_ParseExpression;

    /**
     * Verifies a Proto_GSAMS_ParseExpression message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GSAMS_ParseExpression message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GSAMS_ParseExpression
     */
    public static fromObject(object: { [k: string]: any }): Proto_GSAMS_ParseExpression;

    /**
     * Creates a plain object from a Proto_GSAMS_ParseExpression message. Also converts values to other types if specified.
     * @param message Proto_GSAMS_ParseExpression
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GSAMS_ParseExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GSAMS_ParseExpression to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GSAMS_ParseExpression_Response. */
export interface IProto_GSAMS_ParseExpression_Response {

    /** Proto_GSAMS_ParseExpression_Response ClassName */
    ClassName?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response Expression */
    Expression?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response ObjCN */
    ObjCN?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response LastClassName */
    LastClassName?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response LastParsedFunctionCode */
    LastParsedFunctionCode?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response ET */
    ET?: (number|null);

    /** Proto_GSAMS_ParseExpression_Response ThereIsErrorAtTheTail */
    ThereIsErrorAtTheTail?: (boolean|null);

    /** Proto_GSAMS_ParseExpression_Response successful */
    successful?: (boolean|null);

    /** Proto_GSAMS_ParseExpression_Response ErrorText */
    ErrorText?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response ErrorStartIndex */
    ErrorStartIndex?: (number|null);

    /** Proto_GSAMS_ParseExpression_Response ErrorEndIndex */
    ErrorEndIndex?: (number|null);

    /** Proto_GSAMS_ParseExpression_Response ErrorItem */
    ErrorItem?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response Token */
    Token?: (IProto_GSAMS_ParseExpression_Response_Token[]|null);

    /** Proto_GSAMS_ParseExpression_Response Function */
    Function?: (IProto_GSAMS_ParseExpression_Response_Function[]|null);
}

/** Represents a Proto_GSAMS_ParseExpression_Response. */
export class Proto_GSAMS_ParseExpression_Response implements IProto_GSAMS_ParseExpression_Response {

    /**
     * Constructs a new Proto_GSAMS_ParseExpression_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GSAMS_ParseExpression_Response);

    /** Proto_GSAMS_ParseExpression_Response ClassName. */
    public ClassName: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response Expression. */
    public Expression: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response ObjCN. */
    public ObjCN: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response LastClassName. */
    public LastClassName: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response LastParsedFunctionCode. */
    public LastParsedFunctionCode: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response ET. */
    public ET: number;

    /** Proto_GSAMS_ParseExpression_Response ThereIsErrorAtTheTail. */
    public ThereIsErrorAtTheTail: boolean;

    /** Proto_GSAMS_ParseExpression_Response successful. */
    public successful: boolean;

    /** Proto_GSAMS_ParseExpression_Response ErrorText. */
    public ErrorText: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response ErrorStartIndex. */
    public ErrorStartIndex: number;

    /** Proto_GSAMS_ParseExpression_Response ErrorEndIndex. */
    public ErrorEndIndex: number;

    /** Proto_GSAMS_ParseExpression_Response ErrorItem. */
    public ErrorItem: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response Token. */
    public Token: IProto_GSAMS_ParseExpression_Response_Token[];

    /** Proto_GSAMS_ParseExpression_Response Function. */
    public Function: IProto_GSAMS_ParseExpression_Response_Function[];

    /**
     * Creates a new Proto_GSAMS_ParseExpression_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GSAMS_ParseExpression_Response instance
     */
    public static create(properties?: IProto_GSAMS_ParseExpression_Response): Proto_GSAMS_ParseExpression_Response;

    /**
     * Encodes the specified Proto_GSAMS_ParseExpression_Response message. Does not implicitly {@link Proto_GSAMS_ParseExpression_Response.verify|verify} messages.
     * @param message Proto_GSAMS_ParseExpression_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GSAMS_ParseExpression_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GSAMS_ParseExpression_Response message, length delimited. Does not implicitly {@link Proto_GSAMS_ParseExpression_Response.verify|verify} messages.
     * @param message Proto_GSAMS_ParseExpression_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GSAMS_ParseExpression_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GSAMS_ParseExpression_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GSAMS_ParseExpression_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GSAMS_ParseExpression_Response;

    /**
     * Decodes a Proto_GSAMS_ParseExpression_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GSAMS_ParseExpression_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GSAMS_ParseExpression_Response;

    /**
     * Verifies a Proto_GSAMS_ParseExpression_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GSAMS_ParseExpression_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GSAMS_ParseExpression_Response
     */
    public static fromObject(object: { [k: string]: any }): Proto_GSAMS_ParseExpression_Response;

    /**
     * Creates a plain object from a Proto_GSAMS_ParseExpression_Response message. Also converts values to other types if specified.
     * @param message Proto_GSAMS_ParseExpression_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GSAMS_ParseExpression_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GSAMS_ParseExpression_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GSAMS_ParseExpression_Response_Token. */
export interface IProto_GSAMS_ParseExpression_Response_Token {

    /** Proto_GSAMS_ParseExpression_Response_Token StartIndex */
    StartIndex?: (number|null);

    /** Proto_GSAMS_ParseExpression_Response_Token EndIndex */
    EndIndex?: (number|null);

    /** Proto_GSAMS_ParseExpression_Response_Token TokenType */
    TokenType?: (number|null);

    /** Proto_GSAMS_ParseExpression_Response_Token TokenTypeAsString */
    TokenTypeAsString?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response_Token Token */
    Token?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response_Token DetailedType */
    DetailedType?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response_Token FunctionClassName */
    FunctionClassName?: (Uint8Array|null);
}

/** Represents a Proto_GSAMS_ParseExpression_Response_Token. */
export class Proto_GSAMS_ParseExpression_Response_Token implements IProto_GSAMS_ParseExpression_Response_Token {

    /**
     * Constructs a new Proto_GSAMS_ParseExpression_Response_Token.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GSAMS_ParseExpression_Response_Token);

    /** Proto_GSAMS_ParseExpression_Response_Token StartIndex. */
    public StartIndex: number;

    /** Proto_GSAMS_ParseExpression_Response_Token EndIndex. */
    public EndIndex: number;

    /** Proto_GSAMS_ParseExpression_Response_Token TokenType. */
    public TokenType: number;

    /** Proto_GSAMS_ParseExpression_Response_Token TokenTypeAsString. */
    public TokenTypeAsString: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response_Token Token. */
    public Token: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response_Token DetailedType. */
    public DetailedType: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response_Token FunctionClassName. */
    public FunctionClassName: Uint8Array;

    /**
     * Creates a new Proto_GSAMS_ParseExpression_Response_Token instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GSAMS_ParseExpression_Response_Token instance
     */
    public static create(properties?: IProto_GSAMS_ParseExpression_Response_Token): Proto_GSAMS_ParseExpression_Response_Token;

    /**
     * Encodes the specified Proto_GSAMS_ParseExpression_Response_Token message. Does not implicitly {@link Proto_GSAMS_ParseExpression_Response_Token.verify|verify} messages.
     * @param message Proto_GSAMS_ParseExpression_Response_Token message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GSAMS_ParseExpression_Response_Token, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GSAMS_ParseExpression_Response_Token message, length delimited. Does not implicitly {@link Proto_GSAMS_ParseExpression_Response_Token.verify|verify} messages.
     * @param message Proto_GSAMS_ParseExpression_Response_Token message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GSAMS_ParseExpression_Response_Token, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GSAMS_ParseExpression_Response_Token message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GSAMS_ParseExpression_Response_Token
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GSAMS_ParseExpression_Response_Token;

    /**
     * Decodes a Proto_GSAMS_ParseExpression_Response_Token message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GSAMS_ParseExpression_Response_Token
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GSAMS_ParseExpression_Response_Token;

    /**
     * Verifies a Proto_GSAMS_ParseExpression_Response_Token message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GSAMS_ParseExpression_Response_Token message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GSAMS_ParseExpression_Response_Token
     */
    public static fromObject(object: { [k: string]: any }): Proto_GSAMS_ParseExpression_Response_Token;

    /**
     * Creates a plain object from a Proto_GSAMS_ParseExpression_Response_Token message. Also converts values to other types if specified.
     * @param message Proto_GSAMS_ParseExpression_Response_Token
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GSAMS_ParseExpression_Response_Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GSAMS_ParseExpression_Response_Token to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GSAMS_ParseExpression_Response_Function. */
export interface IProto_GSAMS_ParseExpression_Response_Function {

    /** Proto_GSAMS_ParseExpression_Response_Function Name */
    Name?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response_Function ExplanatoryCode */
    ExplanatoryCode?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response_Function FunctionType */
    FunctionType?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response_Function FunctionClassName */
    FunctionClassName?: (Uint8Array|null);

    /** Proto_GSAMS_ParseExpression_Response_Function ReturnType */
    ReturnType?: (number|null);

    /** Proto_GSAMS_ParseExpression_Response_Function ReturnClassName */
    ReturnClassName?: (Uint8Array|null);
}

/** Represents a Proto_GSAMS_ParseExpression_Response_Function. */
export class Proto_GSAMS_ParseExpression_Response_Function implements IProto_GSAMS_ParseExpression_Response_Function {

    /**
     * Constructs a new Proto_GSAMS_ParseExpression_Response_Function.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GSAMS_ParseExpression_Response_Function);

    /** Proto_GSAMS_ParseExpression_Response_Function Name. */
    public Name: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response_Function ExplanatoryCode. */
    public ExplanatoryCode: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response_Function FunctionType. */
    public FunctionType: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response_Function FunctionClassName. */
    public FunctionClassName: Uint8Array;

    /** Proto_GSAMS_ParseExpression_Response_Function ReturnType. */
    public ReturnType: number;

    /** Proto_GSAMS_ParseExpression_Response_Function ReturnClassName. */
    public ReturnClassName: Uint8Array;

    /**
     * Creates a new Proto_GSAMS_ParseExpression_Response_Function instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GSAMS_ParseExpression_Response_Function instance
     */
    public static create(properties?: IProto_GSAMS_ParseExpression_Response_Function): Proto_GSAMS_ParseExpression_Response_Function;

    /**
     * Encodes the specified Proto_GSAMS_ParseExpression_Response_Function message. Does not implicitly {@link Proto_GSAMS_ParseExpression_Response_Function.verify|verify} messages.
     * @param message Proto_GSAMS_ParseExpression_Response_Function message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GSAMS_ParseExpression_Response_Function, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GSAMS_ParseExpression_Response_Function message, length delimited. Does not implicitly {@link Proto_GSAMS_ParseExpression_Response_Function.verify|verify} messages.
     * @param message Proto_GSAMS_ParseExpression_Response_Function message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GSAMS_ParseExpression_Response_Function, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GSAMS_ParseExpression_Response_Function message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GSAMS_ParseExpression_Response_Function
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GSAMS_ParseExpression_Response_Function;

    /**
     * Decodes a Proto_GSAMS_ParseExpression_Response_Function message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GSAMS_ParseExpression_Response_Function
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GSAMS_ParseExpression_Response_Function;

    /**
     * Verifies a Proto_GSAMS_ParseExpression_Response_Function message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GSAMS_ParseExpression_Response_Function message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GSAMS_ParseExpression_Response_Function
     */
    public static fromObject(object: { [k: string]: any }): Proto_GSAMS_ParseExpression_Response_Function;

    /**
     * Creates a plain object from a Proto_GSAMS_ParseExpression_Response_Function message. Also converts values to other types if specified.
     * @param message Proto_GSAMS_ParseExpression_Response_Function
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GSAMS_ParseExpression_Response_Function, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GSAMS_ParseExpression_Response_Function to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GSAMS_GroupRelation. */
export interface IProto_GSAMS_GroupRelation {

    /** Proto_GSAMS_GroupRelation Operation */
    Operation?: (number|null);

    /** Proto_GSAMS_GroupRelation GroupClassName */
    GroupClassName?: (Uint8Array|null);

    /** Proto_GSAMS_GroupRelation GroupType */
    GroupType?: (Uint8Array|null);

    /** Proto_GSAMS_GroupRelation MemberFilterExpStr */
    MemberFilterExpStr?: (Uint8Array|null);

    /** Proto_GSAMS_GroupRelation Description */
    Description?: (Uint8Array|null);

    /** Proto_GSAMS_GroupRelation KeyGroupField */
    KeyGroupField?: (Uint8Array[]|null);
}

/** Represents a Proto_GSAMS_GroupRelation. */
export class Proto_GSAMS_GroupRelation implements IProto_GSAMS_GroupRelation {

    /**
     * Constructs a new Proto_GSAMS_GroupRelation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GSAMS_GroupRelation);

    /** Proto_GSAMS_GroupRelation Operation. */
    public Operation: number;

    /** Proto_GSAMS_GroupRelation GroupClassName. */
    public GroupClassName: Uint8Array;

    /** Proto_GSAMS_GroupRelation GroupType. */
    public GroupType: Uint8Array;

    /** Proto_GSAMS_GroupRelation MemberFilterExpStr. */
    public MemberFilterExpStr: Uint8Array;

    /** Proto_GSAMS_GroupRelation Description. */
    public Description: Uint8Array;

    /** Proto_GSAMS_GroupRelation KeyGroupField. */
    public KeyGroupField: Uint8Array[];

    /**
     * Creates a new Proto_GSAMS_GroupRelation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GSAMS_GroupRelation instance
     */
    public static create(properties?: IProto_GSAMS_GroupRelation): Proto_GSAMS_GroupRelation;

    /**
     * Encodes the specified Proto_GSAMS_GroupRelation message. Does not implicitly {@link Proto_GSAMS_GroupRelation.verify|verify} messages.
     * @param message Proto_GSAMS_GroupRelation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GSAMS_GroupRelation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GSAMS_GroupRelation message, length delimited. Does not implicitly {@link Proto_GSAMS_GroupRelation.verify|verify} messages.
     * @param message Proto_GSAMS_GroupRelation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GSAMS_GroupRelation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GSAMS_GroupRelation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GSAMS_GroupRelation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GSAMS_GroupRelation;

    /**
     * Decodes a Proto_GSAMS_GroupRelation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GSAMS_GroupRelation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GSAMS_GroupRelation;

    /**
     * Verifies a Proto_GSAMS_GroupRelation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GSAMS_GroupRelation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GSAMS_GroupRelation
     */
    public static fromObject(object: { [k: string]: any }): Proto_GSAMS_GroupRelation;

    /**
     * Creates a plain object from a Proto_GSAMS_GroupRelation message. Also converts values to other types if specified.
     * @param message Proto_GSAMS_GroupRelation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GSAMS_GroupRelation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GSAMS_GroupRelation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GSAMS_CalculatedField_List. */
export interface IProto_GSAMS_CalculatedField_List {

    /** Proto_GSAMS_CalculatedField_List CalculatedField */
    CalculatedField?: (IProto_GSAMS_CalculatedField[]|null);
}

/** Represents a Proto_GSAMS_CalculatedField_List. */
export class Proto_GSAMS_CalculatedField_List implements IProto_GSAMS_CalculatedField_List {

    /**
     * Constructs a new Proto_GSAMS_CalculatedField_List.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GSAMS_CalculatedField_List);

    /** Proto_GSAMS_CalculatedField_List CalculatedField. */
    public CalculatedField: IProto_GSAMS_CalculatedField[];

    /**
     * Creates a new Proto_GSAMS_CalculatedField_List instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GSAMS_CalculatedField_List instance
     */
    public static create(properties?: IProto_GSAMS_CalculatedField_List): Proto_GSAMS_CalculatedField_List;

    /**
     * Encodes the specified Proto_GSAMS_CalculatedField_List message. Does not implicitly {@link Proto_GSAMS_CalculatedField_List.verify|verify} messages.
     * @param message Proto_GSAMS_CalculatedField_List message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GSAMS_CalculatedField_List, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GSAMS_CalculatedField_List message, length delimited. Does not implicitly {@link Proto_GSAMS_CalculatedField_List.verify|verify} messages.
     * @param message Proto_GSAMS_CalculatedField_List message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GSAMS_CalculatedField_List, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GSAMS_CalculatedField_List message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GSAMS_CalculatedField_List
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GSAMS_CalculatedField_List;

    /**
     * Decodes a Proto_GSAMS_CalculatedField_List message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GSAMS_CalculatedField_List
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GSAMS_CalculatedField_List;

    /**
     * Verifies a Proto_GSAMS_CalculatedField_List message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GSAMS_CalculatedField_List message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GSAMS_CalculatedField_List
     */
    public static fromObject(object: { [k: string]: any }): Proto_GSAMS_CalculatedField_List;

    /**
     * Creates a plain object from a Proto_GSAMS_CalculatedField_List message. Also converts values to other types if specified.
     * @param message Proto_GSAMS_CalculatedField_List
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GSAMS_CalculatedField_List, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GSAMS_CalculatedField_List to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_GSAMS_CalculatedField. */
export interface IProto_GSAMS_CalculatedField {

    /** Proto_GSAMS_CalculatedField ClassName */
    ClassName?: (Uint8Array|null);

    /** Proto_GSAMS_CalculatedField Code */
    Code?: (Uint8Array|null);

    /** Proto_GSAMS_CalculatedField ReturnType */
    ReturnType?: (number|null);

    /** Proto_GSAMS_CalculatedField SubReturnType */
    SubReturnType?: (number|null);

    /** Proto_GSAMS_CalculatedField Expression */
    Expression?: (Uint8Array|null);

    /** Proto_GSAMS_CalculatedField DisplayFormat */
    DisplayFormat?: (Uint8Array|null);

    /** Proto_GSAMS_CalculatedField WEBDisplayFormat */
    WEBDisplayFormat?: (Uint8Array|null);

    /** Proto_GSAMS_CalculatedField Tooltip */
    Tooltip?: (Uint8Array|null);
}

/** Represents a Proto_GSAMS_CalculatedField. */
export class Proto_GSAMS_CalculatedField implements IProto_GSAMS_CalculatedField {

    /**
     * Constructs a new Proto_GSAMS_CalculatedField.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_GSAMS_CalculatedField);

    /** Proto_GSAMS_CalculatedField ClassName. */
    public ClassName: Uint8Array;

    /** Proto_GSAMS_CalculatedField Code. */
    public Code: Uint8Array;

    /** Proto_GSAMS_CalculatedField ReturnType. */
    public ReturnType: number;

    /** Proto_GSAMS_CalculatedField SubReturnType. */
    public SubReturnType: number;

    /** Proto_GSAMS_CalculatedField Expression. */
    public Expression: Uint8Array;

    /** Proto_GSAMS_CalculatedField DisplayFormat. */
    public DisplayFormat: Uint8Array;

    /** Proto_GSAMS_CalculatedField WEBDisplayFormat. */
    public WEBDisplayFormat: Uint8Array;

    /** Proto_GSAMS_CalculatedField Tooltip. */
    public Tooltip: Uint8Array;

    /**
     * Creates a new Proto_GSAMS_CalculatedField instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_GSAMS_CalculatedField instance
     */
    public static create(properties?: IProto_GSAMS_CalculatedField): Proto_GSAMS_CalculatedField;

    /**
     * Encodes the specified Proto_GSAMS_CalculatedField message. Does not implicitly {@link Proto_GSAMS_CalculatedField.verify|verify} messages.
     * @param message Proto_GSAMS_CalculatedField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_GSAMS_CalculatedField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_GSAMS_CalculatedField message, length delimited. Does not implicitly {@link Proto_GSAMS_CalculatedField.verify|verify} messages.
     * @param message Proto_GSAMS_CalculatedField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_GSAMS_CalculatedField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_GSAMS_CalculatedField message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_GSAMS_CalculatedField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_GSAMS_CalculatedField;

    /**
     * Decodes a Proto_GSAMS_CalculatedField message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_GSAMS_CalculatedField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_GSAMS_CalculatedField;

    /**
     * Verifies a Proto_GSAMS_CalculatedField message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_GSAMS_CalculatedField message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_GSAMS_CalculatedField
     */
    public static fromObject(object: { [k: string]: any }): Proto_GSAMS_CalculatedField;

    /**
     * Creates a plain object from a Proto_GSAMS_CalculatedField message. Also converts values to other types if specified.
     * @param message Proto_GSAMS_CalculatedField
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_GSAMS_CalculatedField, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_GSAMS_CalculatedField to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_SharedParticipants. */
export interface IProto_SharedParticipants {

    /** Proto_SharedParticipants Participant */
    Participant?: (IProto_Participant[]|null);
}

/** Represents a Proto_SharedParticipants. */
export class Proto_SharedParticipants implements IProto_SharedParticipants {

    /**
     * Constructs a new Proto_SharedParticipants.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_SharedParticipants);

    /** Proto_SharedParticipants Participant. */
    public Participant: IProto_Participant[];

    /**
     * Creates a new Proto_SharedParticipants instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_SharedParticipants instance
     */
    public static create(properties?: IProto_SharedParticipants): Proto_SharedParticipants;

    /**
     * Encodes the specified Proto_SharedParticipants message. Does not implicitly {@link Proto_SharedParticipants.verify|verify} messages.
     * @param message Proto_SharedParticipants message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_SharedParticipants, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_SharedParticipants message, length delimited. Does not implicitly {@link Proto_SharedParticipants.verify|verify} messages.
     * @param message Proto_SharedParticipants message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_SharedParticipants, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_SharedParticipants message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_SharedParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_SharedParticipants;

    /**
     * Decodes a Proto_SharedParticipants message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_SharedParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_SharedParticipants;

    /**
     * Verifies a Proto_SharedParticipants message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_SharedParticipants message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_SharedParticipants
     */
    public static fromObject(object: { [k: string]: any }): Proto_SharedParticipants;

    /**
     * Creates a plain object from a Proto_SharedParticipants message. Also converts values to other types if specified.
     * @param message Proto_SharedParticipants
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_SharedParticipants, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_SharedParticipants to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Proto_Participant. */
export interface IProto_Participant {

    /** Proto_Participant ParticipantCode */
    ParticipantCode?: (Uint8Array|null);

    /** Proto_Participant ParticipantType */
    ParticipantType?: (number|null);

    /** Proto_Participant DisplayName */
    DisplayName?: (Uint8Array|null);

    /** Proto_Participant AccessType */
    AccessType?: (number|null);
}

/** Represents a Proto_Participant. */
export class Proto_Participant implements IProto_Participant {

    /**
     * Constructs a new Proto_Participant.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProto_Participant);

    /** Proto_Participant ParticipantCode. */
    public ParticipantCode: Uint8Array;

    /** Proto_Participant ParticipantType. */
    public ParticipantType: number;

    /** Proto_Participant DisplayName. */
    public DisplayName: Uint8Array;

    /** Proto_Participant AccessType. */
    public AccessType: number;

    /**
     * Creates a new Proto_Participant instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Proto_Participant instance
     */
    public static create(properties?: IProto_Participant): Proto_Participant;

    /**
     * Encodes the specified Proto_Participant message. Does not implicitly {@link Proto_Participant.verify|verify} messages.
     * @param message Proto_Participant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProto_Participant, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Proto_Participant message, length delimited. Does not implicitly {@link Proto_Participant.verify|verify} messages.
     * @param message Proto_Participant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProto_Participant, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proto_Participant message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Proto_Participant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto_Participant;

    /**
     * Decodes a Proto_Participant message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Proto_Participant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Proto_Participant;

    /**
     * Verifies a Proto_Participant message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Proto_Participant message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Proto_Participant
     */
    public static fromObject(object: { [k: string]: any }): Proto_Participant;

    /**
     * Creates a plain object from a Proto_Participant message. Also converts values to other types if specified.
     * @param message Proto_Participant
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Proto_Participant, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Proto_Participant to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** ICRONConstants enum. */
export enum ICRONConstants {
    ZERO_VALUE = 0,
    PROTO_FILE_VERSION = 7
}
