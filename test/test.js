var jsdom = require("jsdom"),
    assert = require("assert"),
    toc = require("spec-toc-obj"),
    pages = require("../index");

suite("Find pages", function() {
    test("find pages from single page WHATWG spec", testFixture([""], "./fixtures/fetch.html"));
    test("find pages from single page CSS WG spec", testFixture([""], "./fixtures/css-scoping.html"));
    test("find pages from multi-page W3C HTML5 spec", testFixture([
        "",
        "introduction.html",
        "infrastructure.html",
        "dom.html",
        "semantics.html",
        "document-metadata.html",
        "sections.html",
        "grouping-content.html",
        "text-level-semantics.html",
        "edits.html",
        "embedded-content-0.html",
        "links.html",
        "tabular-data.html",
        "forms.html",
        "scripting-1.html",
        "common-idioms.html",
        "disabled-elements.html",
        "browsers.html",
        "webappapis.html",
        "editing.html",
        "syntax.html",
        "the-xhtml-syntax.html",
        "rendering.html",
        "obsolete.html",
        "iana.html",
        "index.html",
        "references.html",
        "acknowledgments.html"
    ], "./fixtures/HTML5.html"));
    test("find pages from multi-page W3C SVG spec", testFixture([
        "",
        "expanded-toc.html",
        "intro.html",
        "concepts.html",
        "render.html",
        "types.html",
        "struct.html",
        "styling.html",
        "coords.html",
        "paths.html",
        "shapes.html",
        "text.html",
        "painting.html",
        "color.html",
        "pservers.html",
        "masking.html",
        "filters.html",
        "interact.html",
        "linking.html",
        "script.html",
        "animate.html",
        "fonts.html",
        "metadata.html",
        "backward.html",
        "extend.html",
        "svgdtd.html",
        "svgdom.html",
        "idl.html",
        "java.html",
        "escript.html",
        "implnote.html",
        "conform.html",
        "access.html",
        "i18n.html",
        "minimize.html",
        "refs.html",
        "eltindex.html",
        "attindex.html",
        "propidx.html",
        "feature.html",
        "mimereg.html",
        "changes.html" 
    ], "./fixtures/svg.html"));
});

function testFixture(expected, file) {
    return function(done) {
        jsdom.env(file, function(err, window) {
            if (err) {
                assert.fail(err.message);
            } else {
                assert.deepEqual(expected, pages(window));
            }
            done();
        });
    }
}