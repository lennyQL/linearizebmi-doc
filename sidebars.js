/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    // /*
    download: [
        // 'download/download',
        'download/install',
    ],
    tutorial: [
        {
            type: 'category',
            label: 'はじめに',
            items: ['intro', 'linearizebmi'],
        },
        {
            type: 'category',
            label: 'マニュアル',
            items: ['io','overbound'],
        },
    ],
    sample: ['sample/sample'],
    // tutorialSidebar: [
    //   {
    //     type: 'category',
    //     label: 'Tutorial',
    //     items: ['hello'],
    //   },
    // ],
    //  */
};

module.exports = sidebars;
