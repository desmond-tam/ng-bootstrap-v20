export enum ActionType {
    none = 0,
    home = 1,
    alert = 2,
    accordion = 3,
    badges = 4,
    breadcrumbs = 5,
    buttons = 6,
    cards = 7,
    carousel = 8,
    listGroups = 9,
    modals = 10,
    pagination = 11,
    progress = 12,
    spinners = 13,
    tabs = 14,
    tooltips = 15,
    formEditors = 16,
    formElements = 17,
    formLayouts = 18,
    formValidation = 19,
    icons = 20,
    boxicons = 21,
    remix = 22,
    pagesBlank = 23,
    pagesContact = 24,
    pagesError404 = 25,
    pagesFaq = 26,
    pagesLogin = 27,
    pagesRegister = 28,
    tablesData = 29,
    tablesGeneral = 30,
    usersProfile = 31,
    chartjs = 32,
    apexCharts = 33
}


export interface IAction {
  page: ActionType;
  payload: any;
}

export const initialAction: IAction = {
    page:ActionType.home,
    payload:{
        fullscreen:false
    }
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  plotOptions:ApexPlotOptions;
};
